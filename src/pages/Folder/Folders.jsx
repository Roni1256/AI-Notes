import React, { useContext, useEffect, useState } from "react";
import Title from "../../components/styleComponents/Title.jsx";
import "quill/dist/quill.snow.css";
import {
  FolderArchiveIcon,
  Grid,
  Home,
  List,
  Plus,
  Settings,
  Star,
  Trash,
} from "lucide-react";
import { folders } from "../../lib/data.jsx";
import Input from "../../components/Universal/Input.jsx";
import Button from "../../components/Universal/Button.jsx";
import NotesCard from "../Notes/NotesCard.jsx";
import { Storage } from "../../components/styleComponents/Storage.jsx";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../context/axios.js";
import { UserContext } from "../../App.jsx";
import { FaEdit, FaExclamation, FaExclamationCircle, FaFolder, FaHome, FaTrash } from "react-icons/fa";

const Folders = () => {
  const [isGrid, setGrid] = useState(true);
  const [showDetails, setShowDetails] = useState();
  const navigate = useNavigate();

  const [folders, setFolders] = useState([]);
  const [user, setUser] = useContext(UserContext);
  const fetchFolder = async () => {
    try {
      const resp = await axiosInstance.get("/folders/all/" + user._id);
      setFolders(resp.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(showDetails);
  
  useEffect(() => {
    fetchFolder();
  }, []);
  return (
    <div className="p-6">
      <Title
        title="Folder"
        p="Organize your notes in folder for easy access."
      />
      <div className="flex  flex-col-reverse lg:flex-row gap-3 w-full">
        <div className="w-full">
          <div className="flex items-center gap-3 w-full justify-end ">
            <Button
              icon={Plus}
              className="w-fit h-fit text-nowrap "
              onClick={() => navigate("/folders/new-folder")}
            >
              New Folder
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
            className={`mt-3 w-full grid grid-cols-3 xl:grid-cols-4   gap-x-20 gap-y-10 flex-wrap px-10 lg:px-5`}
          >
            {folders.length === 0 ? (
              <div className="text-2xl font-semibold text-neutral-700 p-10">
                No Folder found
              </div>
            ) : (
              folders.map((folder, i) => {
                return (
                  <FolderComponent
                    name={folder.name}
                    descriptionl={folder.description}
                    key={i}
                    showDetails={showDetails}
                    setShowDetails={setShowDetails}
                    folder={folder}
                  />
                );
              })
            )}
          </div>
        </div>
      
        <SideBar folder={showDetails} total={showDetails?.maximumFiles} nFolders={folders.length} fetchFolder={fetchFolder}/>
      </div>
    </div>
  );
};
export default Folders;

// Folder Button Component

const FolderComponent = ({
  name,
  showDetails,
  setShowDetails,
  folder
}) => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <button
        className={`text-black flex flex-col w-fit items-center group cursor-pointer hover:bg-neutral-200 ${folder===showDetails?"bg-neutral-200 border border-gray-300":""} p-3 rounded-md`}
        onClick={(e) =>{
          console.log(e);
          
          if(!showDetails){
            setShowDetails(folder)
          }else{
            setShowDetails(undefined)
          }
        }}
        onDoubleClick={() => {
          navigate(`/folders/${folder._id}`, { state: { folder:folder } });
        }}
        
      >
        <FaFolder
          size={80}
          className="text-neutral-800 group-hover:text-neutral-950 cursor-pointer"
        />
        {name}
      </button>
     
    </div>
  );
};


// Sidebar to view details
const SideBar = ({ folder,total, nFolders,fetchFolder }) => {
  const navigate=useNavigate()
  const [user, setUser] = useContext(UserContext);
  const editFolder=()=>{
    navigate(`/folders/edit-folder/${folder._id}`, { state: { folder:folder } });
  }
  const deleteFolder=async()=>{
    try {
      const resp=await axiosInstance.delete(`/folders/${user._id}/${folder._id}`)
      if(resp.status === 200){
        alert(resp.data.message)
        folder(undefined)
        fetchFolder()
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div className="mt-4 w-full lg:h-screen md:w-2/3 lg:w-1/2 border-l-2 border-gray-300 p-4">
      <h1 className="text-lg md:text-xl lg:text-3xl font-semibold flex items-center justify-between">
        <div className="flex gap-2">
            {folder?`${folder?.name}  (${folder?.maximumFiles})` : `Home (${nFolders})`}        
        </div>
        {folder?.name ? (
          <FaFolder
            size={40}
            className="text-neutral-800 group-hover:text-neutral-950 cursor-pointer md:w-[50px] lg:w-[60px]"
          />
        ) : (
          
          <FaHome
            size={40}
            className="text-neutral-500 group-hover:text-gray-950 cursor-pointer md:w-[50px] lg:w-[60px]"
          />
        )}
      </h1>
      {
        !folder?.name && (
          <div className="flex items-center gap-5 md:gap-10 mt-10 rounded-md border-2 border-gray-300 p-3 text-sm md:text-base">
            <FaExclamationCircle size={20} className="md:w-[25px] lg:w-[30px]" />  
            Select a Folder to know more information 
          </div>
        )
      }
      {folder?.name && (
        <div className="mt-5">
          <div className="flex items-center gap-5 md:gap-10 mt-10 rounded-md border-2 border-gray-300 p-3 text-sm md:text-base">
            <FaExclamationCircle size={20} className="md:w-[25px] lg:w-[30px]" />  
            Double Click the folder to view the notes.
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
                    {folder?.tags?.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
          <div className="mt-5">
            <span className="text-gray-500 font-semibold text-sm md:text-base">Description</span>
            <p className="max-w-2/3 mt-2 text-sm md:text-base">
              {folder?.description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-8 text-sm md:text-base lg:text-lg">
            <span className="text-gray-500">Folder Size</span>
            2.5 MB
          </div>
          <div className="flex items-center justify-between mt-4 text-sm md:text-base lg:text-lg">
            <span className="text-gray-500">Number of Notes</span>
            {folder?.files.length}
          </div>
          <div className="flex items-center justify-between mt-4 text-sm md:text-base lg:text-lg">
            <span className="text-gray-500">Maximum Notes</span>
            {folder?.maximumFiles}
          </div>
          <div className="flex items-center justify-between mt-4 text-sm md:text-base lg:text-lg">
            <span className="text-gray-500">Created Date</span>
            22-05-2025
          </div>
          <div className="flex items-center justify-between mt-4 text-sm md:text-base lg:text-lg">
            <span className="text-gray-500">Date Modified</span>
            22-05-2025
          </div>
          <div className="flex items-center justify-center gap-20  mt-4 text-sm md:text-base lg:text-lg">
            <Button className="gap-10" variant="primary" onClick={editFolder}>Edit <FaEdit/></Button>
            <Button className="gap-10" variant="danger" onClick={deleteFolder}>Delete <FaTrash/></Button>
          </div>
                  
        </div>
      )}

    </div>  );
};
