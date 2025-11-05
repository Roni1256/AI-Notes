import React, { useContext, useEffect, useState } from "react";
import Title from "../../components/styleComponents/Title.jsx";
import "quill/dist/quill.snow.css";
import { Folder, Grid, List, Plus, Settings, Star, Trash } from "lucide-react";
import Input from "../../components/Universal/Input.jsx";
import Button from "../../components/Universal/Button.jsx";
import NotesCard from "../Notes/NotesCard.jsx";
import { Storage } from "../../components/styleComponents/Storage.jsx";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../context/axios.js";
import { LoaderContext, UserContext } from "../../App.jsx";
const Workspace = () => {
  const [isGrid, setGrid] = useState(true);
  const navigate = useNavigate();
  const tags = ["react", "html", "css", "java", "javascript", "python"];
  const tagsColor = [
    "bg-purple-200",
    "bg-blue-200",
    "bg-red-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-pink-200",
  ];
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useContext(UserContext);
  const [folders,setfolders]=useState([])
  const [currentFolder,setCurrentFolder]=useState()
  const [isInitialLoading,setIsInitialLoading]=useContext(LoaderContext)

  

  const fetchNotes = async () => {
    try {
      const resp = await axiosInstance.get("/notes/all/" + user._id);
      setNotes(resp.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  const fetchFolderNotes=async(folder)=>{
    try {
          const fetchPromises = folder.files.map(async (file) => {
            const resp = await axiosInstance.get(`/notes/${user._id}/${file}`);
            return resp.data;
          });
    
          const allNotes = await Promise.all(fetchPromises);
          setNotes(allNotes);
        } catch (error) {
          console.log(error.message);
        }
  }

  const fetchFolders=async()=>{
  
    try {
      const resp=await axiosInstance.get(`/folders/all/${user._id}`)
      setfolders(resp.data)
      console.log(resp.data);
      
      setCurrentFolder(resp.data[0]._id)
      fetchFolderNotes(resp.data[0])
    } catch (error) {
      console.log(error.message);
      
    }
  }

  useEffect(() => {
    fetchNotes();
    fetchFolders()      
  }, []);


  return (
    <div className="p-6">
      <Title
        title="Workspace"
        p="Manage and organize all your notes in one place"
      />
      <div className="flex flex-col lg:flex-row gap-3 w-full">
        <div className="mt-16 p-4 lg:max-w-[300px] w-full flex flex-col gap-2">
          <div className="p-4 rounded-md border-2 border-gray-300 ">
            <h1 className="flex items-center justify-between  text-lg font-semibold text-neutral-900 ">
              Folders
              <button className="hover:bg-gray-100 rounded-md p-2 cursor-pointer transition-all ease-in-out duration-200">
                <Folder />
              </button>
            </h1>
            <div className="mt-4 p-2 flex gap-2 flex-col max-h-[50vh] overflow-auto">
              {folders.map((folder, index) => {
                return (
                  <button
                    key={index}
                    className={`text-md w-full flex items-center justify-between p-2 hover:bg-gray-200 ${currentFolder===folder._id?"bg-gray-200":""} focus:bg-gray-200 active:bg-gray-200 rounded-md cursor-pointer`}
                    onClick={()=>{
                      setCurrentFolder(folder._id)
                      fetchFolderNotes(folder)
                    }}
                    
                  >
                    {folder.name} <span>{folder.notes}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <Storage />
        </div>
        <div className="p-6 w-full">
          <div className="flex items-center gap-3 w-full justify-end ">
              {/* <Button
                icon={Settings}
                className="w-fit h-fit text-nowrap "
                variant="outline"
              >
                Preference
              </Button> */}
            <Button
              icon={Plus}
              className="w-fit h-fit text-nowrap "
              onClick={() => navigate("new-note")}
            >
              New Note
            </Button>
          </div>
          <div className="w-full flex gap-2 justify-start mt-3">
            <Input placeholder={"Search"} className={""} />
            <Button
              className="w-fit h-fit text-nowrap"
              variant={isGrid ? "primary" : "outline"}
              icon={Grid}
              onClick={() => {
                setGrid(!isGrid);
              }}
            />
            <Button
              icon={List}
              variant={!isGrid ? "primary" : "outline"}
              className="w-fit h-fit text-nowrap"
              onClick={() => {
                setGrid(!isGrid);
              }}
            />
          </div>
          <div
            className={`mt-3 w-full grid ${
              isGrid ? "lg:grid-cols-2" : "grid-cols-1"
            } gap-5`}
          >
            {notes.length === 0 ? (
              <div className="text-2xl font-semibold text-neutral-700 p-10">
                No Notes Found
              </div>
            ) : (
              notes.map((note, index) => {
                return (
                  <NotesCard
                    key={index}
                    title={note.title}
                    content={note.notes}
                    category={note.category}
                    onClick={()=>{
                      navigate(`/workspace/${note._id}`, { state: { data: note } })
                    }}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Workspace;
