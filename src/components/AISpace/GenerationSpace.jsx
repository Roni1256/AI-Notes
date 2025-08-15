import axios from "axios";
import GeneratingLoader from "../styleComponents/GeneratingLoader";
import { Brain, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { axiosInstance } from "../../context/axios";

const defaultPrompts = [
  "Create a Java program to implement a binary search tree",
  "Explain the concept of dynamic programming with examples",
  "Write a Python function to find the longest common subsequence",
  "Implement a sorting algorithm and analyze its time complexity",
  "Design a system for an online booking platform",
];

const GenerationSpace = ({ response = null, loading, setPrompt, setLoading }) => {
  const [currentContent, setCurrentContent] = useState(null);
  const [generatedContent, setGeneratedContent] = useState([]);

  const viewContent = async (item, id) => {
    try {
      setLoading(true);

      // Check if content already exists in cache
      const isContentExist = generatedContent.find((content) => content.id === id);
      if (isContentExist) {
        setCurrentContent(isContentExist.data);
        setLoading(false);
        return;
      }

      // If not cached, fetch from API
      const resp = await axiosInstance.post("/ai/generate-core-content", {
        prompt: "Generate the core content for the topic",
        topic: response.title,
        item: item,
      });

      setCurrentContent(resp.data.data);
      setGeneratedContent((prev) => [...prev, { data: resp.data.data, id: id }]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const comeBack = () => {
    setCurrentContent(null);
    setLoading(false);
  };

  return (
    <div className="mt-10 mb-30 h-full w-full border-2 border-gray-300 rounded-lg p-5 bg-white text-neutral-700">
      <h2 className="text-lg text-neutral-400 w-full flex items-center gap-5">
        Generation Space <Brain />
      </h2>

      <button
        className="mt-5 bg-gray-100 border border-gray-500 rounded-lg hover:bg-gray-200 cursor-pointer flex items-center justify-center p-2"
        onClick={comeBack}
      >
        <ChevronLeft />
      </button>

      {/* Initial prompt suggestion screen */}
      {!response && !loading && (
        <div className="h-[75vh] flex flex-col items-center justify-center">
          <h3 className="text-2xl text-neutral-700 font-semibold">
            How Can I Assist You?
          </h3>
          <ul className="text-neutral-600 mt-5 space-y-3">
            {defaultPrompts.map((item, i) => (
              <li
                className="bg-gray-100 p-3 rounded-xl hover:bg-gray-200 cursor-pointer"
                key={i}
                onClick={() => setPrompt(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Show list of contents */}
      {response && !currentContent && !loading && (
        <div className="flex flex-col items-start justify-center gap-4 p-10">
          <h3 className="text-2xl text-neutral-700 font-semibold w-full text-center">
            {response.title}
          </h3>
          <hr className="bg-gray-200/10 w-full" />
          <div className="flex flex-row gap-2 w-full">
            <div className="w-full">
              <h4 className="text-xl text-neutral-500 mb-3 text-left w-full">
                List of Contents
              </h4>
              <ul className="text-neutral-600 space-y-2 max-h-[50vh] overflow-auto">
                {response.list_of_content.map((item, index) => (
                  <li
                    key={index}
                    className="p-3 rounded-xl cursor-pointer flex items-start justify-between transition-all duration-300 ease-linear hover:bg-gray-100"
                    onClick={() => viewContent(item, index)}
                  >
                    {item}
                    <button className="cursor-pointer">
                      <ChevronRight />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 w-2/3 flex flex-col items-end">
              <div className="flex gap-2 items-center">
                <label htmlFor="total_List" className="text-neutral-400">
                  Total Contents :
                </label>
                <span className="text-neutral-700 font-semibold">
                  {response.list_of_content.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Show core content */}
      {currentContent && !loading && (
        <div className="p-10">
          <h4 className="text-xl text-neutral-500 mb-3 text-left w-full">
            Core Content
          </h4>
          <div className="bg-gray-100 p-5 rounded-lg w-full">
            <h5 className="text-lg text-neutral-700 font-semibold mb-3">
              {currentContent?.title}
            </h5>
            <div
              className="text-neutral-600"
              dangerouslySetInnerHTML={{ __html: currentContent?.content }}
            ></div>
          </div>
        </div>
      )}

      {/* Loader */}
      {loading && <GeneratingLoader />}
    </div>
  );
};

export default GenerationSpace;
