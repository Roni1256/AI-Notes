import { useNavigate } from "react-router-dom";
import Input from "../../../components/Universal/Input";
import Title from "../../../components/styleComponents/Title";
import React, { useState } from "react";
import { axiosInstance } from "../../../context/axios";

const FlowchartHome = () => {
  const navigate=useNavigate()
  const [creationDetails,setCreationDetails]=useState(
    {
      name:"",
      description:""
    }
  )

  function handleChange(e){
    const {name,value}=e.target;
    setCreationDetails((prev)=>({
      ...prev,[name]:value
    }))
  }

  async function createChart(e){
    e.preventDefault();
    console.log(creationDetails);
    
    try {
      const resp=await axiosInstance.post('/flowchart/create',{
        name:creationDetails.name,
        description:creationDetails.description
      })

      navigate('/flowchart-workspace',{state:{response:resp.data.data}})
      
    } catch (error) {
      console.log(error);
      
    }
    console.log(creationDetails);
    
  }
  return (
    <div className="p-10 ">
      <Title
        title="Prepare your flowchart"
        p="An efficient way to study is using the flowchart method"
      />
      <div className="p-5 border-2 border-gray-300 rounded-xl max-w-1/2 mt-5">
        <h1 className="text-neutral-500">New Chart</h1>
        <form className=" mt-6">
          <Input label={"Name of Flowchart"} name={"name"} onChange={handleChange}/>
          <div className="">
            <label htmlFor="description" className="label">Description About Chart</label>
            <textarea name="description" id="desc" cols="30" rows="5" className="inp" style={{resize:"none"}} onChange={handleChange}></textarea>
          </div>
          <button className="primary md rounded-md mt-4" onClick={(e)=>createChart(e)}>Create</button>
        </form>
      </div>
    </div>
  );
};

export default FlowchartHome;
