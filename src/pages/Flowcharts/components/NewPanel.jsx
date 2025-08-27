import { X } from "lucide-react";
import Title from "../../../components/styleComponents/Title";
import React, { useEffect, useState } from "react";

const NewPanel = () => {
    const tip=document.getElementById('tip')
  const [position, setPosition] = useState({
    x:0,
    y:0
  });
  const [isGrab, setGrab] = useState(true);

  function grab(e){
    setGrab(true)
    
  }
  useEffect(()=>{
    
  },[isGrab])


  return (
    <div className="bg-white p-3 rounded-lg shadow-lg shadow-black/40 border-2 border-gray-200 absolute top-1/2 left-20 w-[500px] z-50">
      <div className="flex flex-col  items-center justify-between gap-2 mb-5">
        <div
          className="w-[30px]  h-1 bg-gray-400 rounded-full hover:bg-gray-500 cursor-grab"
          id="tip"
          onMouseDown={grab}
        />
      </div>
      <Title p="Create new node" />
      <div className="">
        <div className="mt-4">
          <label htmlFor="label" className="label">
            Label
          </label>
          <input
            type="text"
            name="label"
            id="label"
            className="inp"
            placeholder="Name the label of Node"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="label" className="label">
            Description
          </label>
          <textarea
            type="text"
            name="label"
            id="label"
            className="inp"
            placeholder="Name the label of Node"
          ></textarea>
        </div>
        <button className="primary md rounded-lg mt-3">Create</button>
      </div>
    </div>
  );
};

export default NewPanel;
