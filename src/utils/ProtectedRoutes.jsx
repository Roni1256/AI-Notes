import { UserContext } from "../App";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes(){
  const [user,setUser] = useContext(UserContext)
    
    return (user? <Outlet/> : <Navigate to={"/"}/>)
}