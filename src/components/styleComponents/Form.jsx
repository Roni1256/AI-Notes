import React, { useState, useEffect, useRef } from "react";
import { Loader2, X, Plus, Upload } from "lucide-react";
import slugify from "slugify";

const Form = ({ initialData, onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    coverImage: "",
    categories: [],
    tags: [],
    featured: false,
    ...initialData,
  });

  const [newCategory, setNewCategory] = useState("");
  const [newTag, setNewTag] = useState("");
  const [errors, setErrors] = useState({});
  const [imageFile, setImageFile] = useState(null);

  const quillEditorRef = useRef(null);
  const quillInstanceRef = useRef(null);

  // Generate slug from title
  useEffect(() => {
    if (formData.title && !initialData?.slug) {
      const generatedSlug = slugify(formData.title, { lower: true });
      setFormData((prev) => ({ ...prev, slug: generatedSlug }));
    }
  }, [formData.title, initialData?.slug]);

  // Inside the useEffect that initializes Quill
  // Inside the useEffect that initializes Quill
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Dynamically import Quill
      import("quill").then(({ default: Quill }) => {
        if (quillEditorRef.current && !quillInstanceRef.current) {
          // Configure Quill toolbar options
          const toolbarOptions = [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }],
            ["clean"],
            ["link", "image"],
          ];

          // Initialize Quill with a custom class
          quillInstanceRef.current = new Quill(quillEditorRef.current, {
            modules: {
              toolbar: toolbarOptions,
            },
            theme: "snow",
            placeholder: "Write your content here...",
          });

          // Set initial content
          if (formData.content) {
            quillInstanceRef.current.root.innerHTML = formData.content;
          }

          // Apply custom styles to make text visible
          quillInstanceRef.current.root.style.color = "#333";
          quillInstanceRef.current.root.style.backgroundColor = "#fff";

          // Update formData when editor content changes
          quillInstanceRef.current.on("text-change", () => {
            setFormData((prev) => ({
              ...prev,
              content: quillInstanceRef.current.root.innerHTML,
            }));
          });
        }
      });
    }

    // Cleanup function
    return () => {
      if (quillInstanceRef.current) {
        quillInstanceRef.current = null;
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const addCategory = () => {
    if (newCategory && !formData.categories.includes(newCategory)) {
      setFormData((prev) => ({
        ...prev,
        categories: [...prev.categories, newCategory],
      }));
      setNewCategory("");
    }
  };

  const removeCategory = (category) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.filter((c) => c !== category),
    }));
  };

  const addTag = () => {
    if (newTag && !formData.tags.includes(newTag)) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, newTag],
      }));
      setNewTag("");
    }
  };

  const removeTag = (tag) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tag),
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check file type
    if (!file.type.startsWith("image/")) {
      setErrors((prev) => ({
        ...prev,
        coverImage: "Please upload an image file",
      }));
      return;
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        coverImage: "Image size should be less than 5MB",
      }));
      return;
    }

    // Store the file for submission
    setImageFile(file);

    // Create a preview URL
    const previewUrl = URL.createObjectURL(file);
    setFormData((prev) => ({ ...prev, coverImage: previewUrl }));
    setErrors((prev) => ({ ...prev, coverImage: null }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.slug.trim()) {
      newErrors.slug = "Slug is required";
    }

    if (!formData.excerpt.trim()) {
      newErrors.excerpt = "Excerpt is required";
    } else if (formData.excerpt.length > 300) {
      newErrors.excerpt = "Excerpt must be less than 300 characters";
    }

    if (!formData.content.trim()) {
      newErrors.content = "Content is required";
    }

    if (!formData.coverImage && !imageFile) {
      newErrors.coverImage = "Cover image is required";
    }

    if (formData.categories.length === 0) {
      newErrors.categories = "At least one category is required";
    }

    if (formData.tags.length === 0) {
      newErrors.tags = "At least one tag is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make sure to get the latest content from Quill
    if (quillInstanceRef.current) {
      formData.content = quillInstanceRef.current.root.innerHTML;
    }

    if (validateForm()) {
      // If we have a new image file, pass it along with the form data
      const dataToSubmit = { ...formData };
      if (imageFile) {
        dataToSubmit.coverImage = imageFile;
      }

      onSubmit(dataToSubmit);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full px-3 py-2 bg-neutral-700 border ${
              errors.title ? "border-red-500" : "border-neutral-600"
            } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500`}
            disabled={isSubmitting}
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-500">{errors.title}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Slug
          </label>
          <input
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            className={`w-full px-3 py-2 bg-neutral-700 border ${
              errors.slug ? "border-red-500" : "border-neutral-600"
            } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500`}
            disabled={isSubmitting}
          />
          {errors.slug && (
            <p className="mt-1 text-sm text-red-500">{errors.slug}</p>
          )}
          <p className="mt-1 text-xs text-gray-400">
            URL-friendly version of the title (auto-generated)
          </p>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Excerpt
        </label>
        <textarea
          name="excerpt"
          value={formData.excerpt}
          onChange={handleChange}
          rows={2}
          className={`w-full px-3 py-2 bg-neutral-700 border ${
            errors.excerpt ? "border-red-500" : "border-neutral-600"
          } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500`}
          disabled={isSubmitting}
        ></textarea>
        {errors.excerpt && (
          <p className="mt-1 text-sm text-red-500">{errors.excerpt}</p>
        )}
        <p className="mt-1 text-xs text-gray-400">
          A short summary of the post (max 300 characters)
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Content
        </label>

        {/* Quill Editor Container */}
        <div className="bg-white rounded-md">
          {/* We need to load Quill CSS */}
          <link
            href="https://cdn.quilljs.com/1.3.6/quill.snow.css"
            rel="stylesheet"
          />

          {/* Add custom styles to ensure text is visible */}
          <style jsx global>{`
            .ql-editor {
              color: #333 !important;
              background-color: #fff !important;
            }
            .ql-editor p,
            .ql-editor h1,
            .ql-editor h2,
            .ql-editor h3,
            .ql-editor h4,
            .ql-editor h5,
            .ql-editor h6,
            .ql-editor span {
              color: #333 !important;
            }
          `}</style>

          {/* This div will become the Quill editor */}
          <div
            ref={quillEditorRef}
            className={`${errors.content ? "border border-red-500" : ""}`}
            style={{ minHeight: "300px" }}
          />
        </div>

        {errors.content && (
          <p className="mt-1 text-sm text-red-500">{errors.content}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">
          Cover Image
        </label>
        <div className="mt-1 flex items-center gap-4">
          {formData.coverImage ? (
            <div className="relative w-32 h-32 rounded-md overflow-hidden">
              <img
                src={formData.coverImage}
                alt="Cover"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => {
                  setFormData((prev) => ({ ...prev, coverImage: "" }));
                  setImageFile(null);
                }}
                className="absolute top-1 right-1 p-1 bg-red-600 rounded-full text-white"
                disabled={isSubmitting}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="relative">
              <input
                type="file"
                id="coverImage"
                onChange={handleImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                accept="image/*"
                disabled={isSubmitting}
              />
              <div className="px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white flex items-center gap-2">
                <Upload className="w-5 h-5" />
                <span>Upload Image</span>
              </div>
            </div>
          )}
        </div>
        {errors.coverImage && (
          <p className="mt-1 text-sm text-red-500">{errors.coverImage}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Categories
          </label>
          <div className="flex flex-wrap gap-2 mb-2">
            {formData.categories.map((category) => (
              <div
                key={category}
                className="flex items-center gap-1 px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full"
              >
                <span>{category}</span>
                <button
                  type="button"
                  onClick={() => removeCategory(category)}
                  className="text-blue-400 hover:text-blue-300"
                  disabled={isSubmitting}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="flex-1 px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-l-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Add a category"
              disabled={isSubmitting}
            />
            <button
              type="button"
              onClick={addCategory}
              className="px-3 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors"
              disabled={!newCategory || isSubmitting}
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
          {errors.categories && (
            <p className="mt-1 text-sm text-red-500">{errors.categories}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Tags
          </label>
          <div className="flex flex-wrap gap-2 mb-2">
            {formData.tags.map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-1 px-3 py-1 bg-green-900/30 text-green-400 rounded-full"
              >
                <span>{tag}</span>
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="text-green-400 hover:text-green-300"
                  disabled={isSubmitting}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              className="flex-1 px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-l-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Add a tag"
              disabled={isSubmitting}
            />
            <button
              type="button"
              onClick={addTag}
              className="px-3 py-2 bg-green-600 text-white rounded-r-md hover:bg-green-700 transition-colors"
              disabled={!newTag || isSubmitting}
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
          {errors.tags && (
            <p className="mt-1 text-sm text-red-500">{errors.tags}</p>
          )}
        </div>
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="featured"
          name="featured"
          checked={formData.featured}
          onChange={handleChange}
          className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
          disabled={isSubmitting}
        />
        <label htmlFor="featured" className="ml-2 text-sm text-gray-300">
          Featured post (will be highlighted on the homepage)
        </label>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2 disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>{initialData ? "Updating..." : "Creating..."}</span>
            </>
          ) : (
            <span>{initialData ? "Update Post" : "Create Post"}</span>
          )}
        </button>
      </div>
    </form>
  );
};

export default Form;
