import React, { useState, useEffect } from 'react';
import Title from '../../components/styleComponents/Title';
import TextEditor from '../../components/Universal/TextEditor';
import Input from '../../components/Universal/Input';
import Button from '../../components/Universal/Button';
import { Save, ArrowLeft, Tag, Clock, Folder, X } from 'lucide-react';
import {axiosInstance} from '../../context/axios.js';
import { useContext } from 'react';
import { UserContext } from '../../App.jsx';
const NewNotes = () => {
  const [noteTitle, setNoteTitle] = useState('');
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState('');
  const [category, setCategory] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [autoSaveEnabled, setAutoSaveEnabled] = useState(true);
  const [lastSaved, setLastSaved] = useState(null);
  const [text, setText] = useState('');
  const [user,setUser]=useContext(UserContext)
  const [notesId,setNotesId]=useState()
  const [loading,setLoading]=useState(false)

  const categories = [
    'Personal', 'Work', 'Study', 'Ideas', 'Projects', 'Other'
  ];

  const handleTagInput = (e) => {
    setCurrentTag(e.target.value);
  };

  const handleTagKeyDown = (e) => {
    if (e.key === 'Enter' && currentTag.trim() !== '') {
      e.preventDefault();
      if (!tags.includes(currentTag.trim())) {
        setTags([...tags, currentTag.trim()]);
      }
      setCurrentTag('');
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const saveNote = async() => {
    console.log(text);
    setTimeout(async() => {
      setIsSaving(true);
      setLastSaved(new Date());
      
      if(notesId===""){
        const postObj={
          title:noteTitle,
          tags:tags,
          category:category,
          notes:text,
          user:user._id,
          notesId:notesId,
        }
        await axiosInstance.patch(`/notes/note/${notesId}`,postObj)
        .then((res)=>{
          console.log(res.data);
        })
        .catch((err)=>{
          console.log(err);
        })
      }else{
        const postObj={
          title:noteTitle,
          tags:tags,
          category:category,
          notes:text,
          user:user._id,
        }
        console.log(postObj);
        
        await axiosInstance.post('/notes/note',postObj)
        .then((res)=>{
        setNotesId(res.data._id)
        setIsSaving(false)
        })
        .catch((err)=>{
          console.log(err);
        })
      }
    }, 1000);
  };

  // Auto-save effect
  useEffect(() => {
    let autoSaveTimer;
    
    if (autoSaveEnabled &&text.trim()!=='' && noteTitle.trim() !== '') {
      autoSaveTimer = setTimeout(() => {
        saveNote();
      }, 30000); // Auto-save every 30 seconds
    }
    
    return () => {
      if (autoSaveTimer) clearTimeout(autoSaveTimer);
    };
  }, [noteTitle, tags, category, autoSaveEnabled]);

  return (
    <div className=" px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center">
          <Button 
            variant="outline" 
            icon={ArrowLeft} 
            className="mr-4"
            onClick={() => window.history.back()}
            aria-label="Go back"
          />
          <Title 
            title="Create New Note" 
            p="Capture your thoughts, ideas, and knowledge"
          />
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="text-sm text-gray-500 flex items-center">
            {lastSaved && (
              <>
                <Clock size={14} className="mr-1" />
                <span>Last saved: {lastSaved.toLocaleTimeString()}</span>
              </>
            )}
          </div>
          <Button 
            variant="primary" 
            icon={Save} 
            onClick={saveNote}
            disabled={isSaving || !noteTitle.trim()}
          >
            {isSaving ? 'Saving...' : 'Save Note'}
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6 w-full">
        <div className="p-6 w-full">
          <Input
            id="note-title"
            placeholder="Note Title"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}

            className="text-xl font-semibold border-1 border-b border-gray-200 rounded-lg px-0 focus:ring-0 mb-6 "
            required
          />
          
          <div className="mb-6">
            <TextEditor text={text} setText={setText}/>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Note Details</h3>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Auto-save
            </label>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="auto-save"
                checked={autoSaveEnabled}
                onChange={() => setAutoSaveEnabled(!autoSaveEnabled)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="auto-save" className="ml-2 block text-sm text-gray-700">
                Enable auto-save every 30 seconds
              </label>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Tags</h3>
          
          <div className="flex items-center mb-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Tag size={16} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Add tags (press Enter)"
                value={currentTag}
                onChange={handleTagInput}
                onKeyDown={handleTagKeyDown}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <div 
                key={index} 
                className="flex items-center bg-gray-100 text-gray-800 rounded-full px-3 py-1 text-sm"
              >
                <span>{tag}</span>
                <button 
                  onClick={() => removeTag(tag)}
                  className="ml-1 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
            {tags.length === 0 && (
              <p className="text-gray-500 text-sm">No tags added yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewNotes;