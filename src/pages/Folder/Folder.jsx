import { axiosInstance } from "../../context/axios";
import { UserContext } from "../../App";
import Title from "../../components/styleComponents/Title";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";

const Folder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const folder = location.state?.folder || null;
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useContext(UserContext);
  const fetchNotes = async () => {
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
  };

  useEffect(() => {
    fetchNotes();
    console.log(notes);
  }, []);
  return (
    <div className="p-6">
      <Title title={folder.name} />
      <div className="mt-10 w-full grid grid-cols-3 xl:grid-cols-4  flex-wrap  px-5 ">
        {notes.map((note, index) => {
          console.log(note.title);

          return (
            <button
              className="flex flex-col items-center  w-fit h-fit gap-3 text-neutral-700 cursor-pointer hover:text-neutral-900"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/folders/${folder._id}/${note._id}`, {
                  state: { note: note },
                });
              }}
            >
              <FaFileAlt size={50} />
              <span className="text-neutral-800  font-semibold">
                {note.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Folder;
