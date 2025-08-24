import { X } from "lucide-react";
import Title from "../../components/styleComponents/Title";
import Input from "../../components/Universal/Input";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../context/axios";
import { UserContext } from "../../App";
import Button from "../../components/Universal/Button";

const EditFolder = () => {
    const folderData=useLocation().state.folder
  const [folderDetails, setFolderDetails] = useState({
    name:folderData.name ||"",
    description:folderData.description ||"",
    maximumFiles:folderData.maximumFiles || 10,
    tags:folderData.tags||[],
    fileId:folderData.files ||[],
  });
  const [isPresent,setPresent]=useState("")
  const [notes,setNotes]=useState([])

  const [currentTag,setCurrentTag]=useState("")
  const [user,setUser]=useContext(UserContext)
  const [error,setError]=useState("")
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const postObj={
      name:folderDetails.name,
      description:folderDetails.description,
      maximumFiles:folderDetails.maximumFiles,
      tags:folderDetails.tags,
      files:folderDetails.fileId
    }
    console.log(postObj);
    
    try {
        const resp=await axiosInstance.put(`/folders/${user._id}/${folderData._id}`,postObj)
        console.log(resp);
        
        navigate("/folders");

    } catch (error) {
        console.log(error);
        
        setError(error.response.data.message)
    }
    
  };
  const removeTag = (index) => {
    const newTags = [...folderDetails.tags];
    newTags.splice(index, 1);
    setFolderDetails(prev => ({
      ...prev,
      tags: newTags
    }));
  };
  const handleTagKeyDown = (e) => {    
    if (e.key === "Enter" && currentTag.trim() !== "") {
      e.preventDefault();
      const isValueExists = folderDetails.tags.includes(currentTag.trim());
      if(!isValueExists){
        setFolderDetails((prev) => ({
          ...prev,
          tags: [...prev.tags, currentTag.trim()]
        }));
        setCurrentTag("");
        setPresent("");
      } else {
        setPresent("Already Present");
      }
    }
  };
  const handleTag = (e) => {
    setCurrentTag(e.target.value);
  };
  const fetchAllNotes=async()=>{
    try {
        const resp=await axiosInstance.get('/notes/all/'+user._id)
        
        setNotes(resp.data)
        
        
    } catch (error) {
        console.log(error.message);
        
    }
  }
  const addNotes=(note)=>{
    console.log(note);
    
    if(!folderDetails.fileId.includes(note)){
        setFolderDetails((prev)=>({...prev,fileId:[...folderDetails.fileId,note]}))
      
    }else{
        const newNotes = [...folderDetails.fileId];
        const indexToDelete=folderDetails.fileId.indexOf(note)
        newNotes.splice(indexToDelete,1);
        setFolderDetails(prev => ({
            ...prev,
            fileId:newNotes
        }));
    }
    console.log(folderDetails.fileId);
    
    
}


  useEffect(()=>{
    fetchAllNotes();
  },[])



  return (
    <div className="p-6">
      <Title title={`Edit Folder`} />
      <form onSubmit={handleSubmit} className="mt-10 w-full flex justify-between   gap-10">
        <div className="w-full bg-white border border-gray-300  rounded-md p-4  h-full ">
            <div className="flex flex-col gap-2 ">
            <label
                htmlFor="folder-name"
                className="text-md text-neutral-600 font-semibold"
            >
                Folder Name
            </label>
            <Input
                type="text"
                placeholder={"Folder Name"}
                value={folderDetails.name}
                onChange={(e) =>
                setFolderDetails((prev) => ({ ...prev, name: e.target.value }))
                }
                id="folder-name"
                required
            />
            </div>

            <div className="flex flex-col gap-2 ">
            <label
                htmlFor="folder-name"
                className="text-md text-neutral-600 font-semibold"
            >
                Description
            </label>
            <Input
                type="text"
                placeholder={"Description"}
                value={folderDetails.description}
                onChange={(e) =>
                setFolderDetails((prev) => ({
                    ...prev,
                    description: e.target.value,
                }))
                }
                id="folder-description"
                required
            />
            </div>

            <div className="flex flex-col gap-2 ">
            <label
                htmlFor="folder-name"
                className="text-md text-neutral-600 font-semibold"
            >
                Maximum Notes
            </label>
            <Input
                type="number"
                placeholder={"Maimum Notes"}
                value={folderDetails.maximumFiles}
                onChange={(e) =>
                setFolderDetails((prev) => ({
                    ...prev,
                    maximumFiles: e.target.value,
                }))
                }
                id="folder-size"
                required
            />
            </div>

            <div className="flex flex-col gap-2 ">
            <label
                htmlFor="folder-name"
                className="text-md text-neutral-600 font-semibold"
            >
                Tags
            </label>
            <Input
                type="text"
                placeholder={"Folder Tags"}
                value={currentTag}
                onChange={handleTag}
                onKeyDown={handleTagKeyDown}
                id="folder-tags"
                required
            />
            {isPresent && <span className="text-yellow-600 font-light text-sm ">{isPresent}</span>}
            {folderDetails.tags.length > 0 && ( 
                <div className="flex flex-wrap gap-2">
                {folderDetails.tags.map((tag, i) => (
                    <span
                    className="px-2 py-1 bg-gray-100 rounded-md text-sm font-light flex items-center gap-1"
                    key={i}
                    >
                    {tag}
                    <button type="button" onClick={() => removeTag(i)} className="hover:text-red-500">
                        <X size={16} />
                    </button>
                    </span>
                ))}
                </div>
            )}
            </div>
        </div>
        <div className="bg-white border border-gray-300  rounded-md p-4  h-[392px] flex flex-col gap-2 w-full">
            <label htmlFor="notes" className="text-md text-neutral-600 font-semibold mb-3">Choose the Notes in Folder</label>

            {
                notes.map((note,index)=>{
                
                    return(
                        <div className={`w-full  border p-2 rounded-md cursor-pointer ${folderDetails.fileId.includes(note._id)?"border-gray-500 border-2":"border-gray-300"}`} key={index} onClick={()=>addNotes(note._id)}>
                            {note.title}
                            
                        </div>
                    )
                })
            }
        </div>
      </form>
      {error && <div className="text-red-600 font-light my-3">{error}</div>}
        <Button variant="primary" className="mt-3" onClick={handleSubmit}>Edit</Button>

    </div>
  );
};

export default EditFolder;