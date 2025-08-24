import { Download, Info, SaveIcon, X } from "lucide-react";
import Title from "../../../components/styleComponents/Title";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { axiosInstance } from "../../../context/axios";
// import GeneratingLoader from "../../../components/styleComponents/GeneratingLoader";
import GeneratedList from "../components/GeneratedList";
import GenerationSpace from "../components/GenerationSpace";

const AIPrompt = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const generateNotes = async () => {
    try {
      setLoading(true);
      const promptTrimmed = prompt.trim();
      setPrompt(" ");
      const response = await axiosInstance.post("/ai/generate-content-list", {
        prompt: String(promptTrimmed),
      });
      setPrompt(" ");
      console.log(response);
      setLoading(false);
      setMessage(response.message);
      setTimeout(() => {
        setMessage("");
      }, 3000);
      setResponse(response.data.data);
    } catch (error) {
      setLoading(false);
      setTimeout(() => {
        setMessage(error.message);
      }, 3000);
      console.error("Error generating notes:", error);
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevents the default action of the Enter key
      generateNotes();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setMessage("Welcome to Notes Assistant");
    }, 0);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  }, []);

  return (
    <div className="p-10 overflow-auto">
      <Title
        title="Generate Notes"
        p="Generate your notes in your own format"
      />
      <div className="flex justify-between w-full items-center">
        <span className="bg-purple-200 text-neutral-700 text-sm rounded-md border border-gray-400 max-w-1/2 flex py-1 px-3 gap-3 items-center  justify-center mt-3">
          <Info />
          The notes provided here can be modified according to your need as of
          your wish. Utilize the tools provided to download or save the notes.
        </span>
        {response && (
          <div className="flex gap-5 ">
            <button
              className={`text-neutral-500 hover:text-neutral-800 active:text-neutral-900`}
            >
              <Download />
            </button>
            <button
              className={`text-neutral-500 hover:text-neutral-800 active:text-neutral-900`}
            >
              <SaveIcon />
            </button>
          </div>
        )}
      </div>
      <div className="flex gap-10">
        <div className="fixed bottom-0 right-0 w-full flex items-center justify-center p-6 bg-white/20 backdrop-blur-md border-t border-neutral-200 shadow-lg">
          <div className="relative w-2/3 max-w-3xl">
            <div className="flex items-center bg-white rounded-full border-2 border-neutral-300 hover:border-neutral-400 transition-colors duration-200">
              <input
                type="text"
                className="w-full px-6 py-3 text-base text-neutral-800 placeholder-neutral-400 bg-transparent outline-none rounded-full"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => handleInputKeyDown(e)}
                placeholder="Type your message here..."
              />
              <button
                className=" cursor-pointer absolute right-3 p-2 text-neutral-500 hover:text-neutral-700 transition-colors duration-200"
                onClick={generateNotes}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start gap-4">
        {/* <GeneratedList /> */}
        <GenerationSpace response={response} loading={loading} setPrompt={setPrompt} setLoading={setLoading}/>
      </div>
      {/* {loading ? (
        <GeneratingLoader />
      ) : (
        
      )} */}

      {message && (
        <div className="text-sm flex items-center justify-between bg-gray-200 px-4 py-1 rounded-lg text-neutral-800 max-w-1/2 absolute bottom-50 right-10">
          {message}{" "}
          <button
            className="hover:bg-red-300 p-2 rounded-md "
            onClick={() => setMessage("")}
          >
            <X size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default AIPrompt;
