import React, { useContext, useState } from "react";
import Title from "../components/styleComponents/Title";
import {
  BookText,
  Brain,
  Download,
  FileText,
  Save,
  Send,
  Star,
  X,
} from "lucide-react";
import CategoryCard from "../components/Universal/CategoryCard";
import ButtonLoading from "../components/Universal/ButtonLoading";

import { axiosInstance } from "../context/axios";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { UserContext } from "../App";

const AIPrompt = () => {
  const NoteFormats = [
    {
      icon: <BookText size={30} />,
      title: "Full-Fludged Notes",
      desc: "Detailed explanations and in-depth coverage",
      color: "text-red-400 bg-red-200",
    },
    {
      icon: <Star size={30} />,
      title: "Last-Minute Revision Notes",
      desc: "Summarized key points for quick review",
      color: "text-yellow-400 bg-yellow-200",
    },
    {
      icon: <FileText size={30} />,
      title: "One-Pagers",
      desc: "Compact cheat sheets with key concepts only",
      color: "text-blue-400 bg-blue-200",
    },
    {
      icon: <Brain size={30} />,
      title: "Conceptual Overviews",
      desc: "Focus on understanding core concepts",
      color: "text-purple-400 bg-purple-200",
    },
  ];
  const [notesFormat, setNotesFormat] = useState(NoteFormats[0].title);
  const [prompt, setPrompt] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [user,setUser]=useContext(UserContext)

  const promptSubmit = async () => {
    try {
      setPrompt("");

      setLoading(true);
      const resp = await axiosInstance.post("/ai/prompt", {
        prompt: prompt,
        notesFormat: notesFormat,
      });

      setPrompt("");
      console.log(resp);
      let sanitizedNotes = resp.data.data;
      sanitizedNotes = sanitizedNotes.replace(/<think>/g, '').replace(/<\/think>/g, '');
      setNotes(sanitizedNotes);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMsg(error.message);
    }
  };

  
  const saveData=async()=>{
    try {
      setLoading(true)
      const resp=await axiosInstance.post('/ai/save',{
        notes:notes,
        id:user._id
      })
      console.log(resp);
      
      setLoading(false)
    } catch (error) {
      setErrorMsg(error.message)
      console.log(error.message);
      setLoading(false)
    }
  }

  return (
    <div className="p-6 relative">
      <Title
        title="AI-Prompt Space"
        p="Your study companion is ready to help you "
      />
      <div className="flex w-full justify-center bg-white ">
        {!notes ? (
          <div className="absolute bottom-0 w-full max-w-1/2 flex gap-4 z-50 ">
            <input
              type="text"
              className="w-full border-2 bg-white border-gray-400 hover:border-gray-500 active:border-gray-500 focus:border-gray-500 rounded-full p-4 px-8"
              placeholder="Prompt you notes requirement..."
              value={prompt}
              onChange={(e) => {
                setPrompt(e.target.value);
              }}
            />
            <button
              className="bg-neutral-700 hover:bg-neutral-800 transition-colors rounded-full w-14 h-14 flex items-center justify-center text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={promptSubmit}
              disabled={prompt.length === 0}
            >
              <Send size={24} />
            </button>
          </div>
        ) : (
          <div className="absolute bottom-0 w-full max-w-1/2 flex  z-50 items-center justify-center gap-20">
            <button
              className="bg-neutral-700 hover:bg-neutral-800 text-white transition-colors rounded-lg flex items-center gap-3 p-4 cursor-pointer "
              onClick={promptSubmit}
              disabled={prompt.length === 0}
            >
              Download
              <Download size={24} />
            </button>
            <button
              className="bg-blue-600 hover:bg-blue-800 text-white transition-colors rounded-lg flex items-center gap-3 p-4 cursor-pointer "
              onClick={saveData}
              disabled={prompt.length === 0}

            >
              Save
              {loading?<ButtonLoading/>:<Save size={24} />}
            </button>
          </div>
        )}
      </div>

      <div className="">
        <section className="mt-10">
          <div className="flex  items-center justify-between">
            <h1 className="text-2xl font-semibold  ">
              Choose Your Note Format
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            {NoteFormats.map(({ icon, title, desc, color }, i) => {
              return (
                <div
                  className={`p-5 rounded-md border-2 border-gray-200 flex flex-col items-center hover:border-gray-400 transition-all ease-in-out duration-300 cursor-pointer ${
                    notesFormat === title
                      ? "border-gray-500"
                      : "border-gray-200"
                  }`}
                  key={i}
                  onClick={() => {
                    setNotesFormat(title);
                  }}
                >
                  <div className={"p-3 rounded-md w-fit " + color}>{icon}</div>
                  <h1 className="text-xl font-semibold mt-4">{title}</h1>
                  <p className="text-md mt-1">{desc}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <div className="mt-20 p-10" data-color-mode="light">
        {loading && <div className="text-neutral-700 font-semibold text-lg flex gap-1 w-full bg-gray-100 px-10 py-2">
          Loading 
          <div className="animate-bounce delay-0">.</div>
          <div className="animate-bounce delay-150">.</div>
          <div className="animate-bounce delay-300">.</div>
        </div>}
        {notes && <MarkdownPreview
          source={notes}
          className="p-32 bg-white rounded-md"
        ></MarkdownPreview>}
      </div>
      {errorMsg && (
        <div className="fixed bottom-32 right-10 rounded-md border-2 border-red-300 flex items-center justify-between gap-3 p-3 animate-bounce-once">
          <h1 className="text-red-400 font-semibold">
            {errorMsg}
          </h1>
          <button className="cursor-pointer " onClick={()=>setErrorMsg(false)}>
            <X />
          </button>
        </div>
      )}
    </div>
  );
};

export default AIPrompt;
