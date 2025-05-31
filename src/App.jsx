import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import Authentication from './pages/Authentication';
import Verification from './pages/Verification';
import endpoints from './endpoints/endpoints';
import{axiosInstance} from './context/axios'
import { createContext } from 'react';
import Loader from './components/styleComponents/Loader';
import AIPrompt from './pages/AIPrompt';
import Workspace from './pages/Workspace';
import NewNotes from './pages/NewNotes';
import Note from './pages/Note';
import Profile from './pages/Profile';
import Folders from './pages/Folders';
import NewFolder from './pages/NewFolder';
import Folder from './pages/Folder';
import File from './pages/File';
import EditFolder from './pages/EditFolder'

export const UserContext=createContext()
export const LoaderContext=createContext()

const App = () => {
 
  const[isLoggedIn,setLoggedIn]=useState(false)
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  const navigate=useNavigate()
  useEffect(() => {
    const checkUser = async () => {
      try {
        setIsInitialLoading(true);
        const resp = await axiosInstance.get(endpoints.currentUser)
        if(!resp.data) {
          setIsInitialLoading(false);
          setLoggedIn(false);
          navigate('/');
          return;
        }
        setLoggedIn(resp.data);
        setIsInitialLoading(false);
      } catch (error) {
        setLoggedIn(false);
        navigate('/');
        setIsInitialLoading(false);
      }
    }
    checkUser();
  },[navigate])

  if (isInitialLoading) {
    return <Loader/>
  }
  return (
    <div className="">
      <UserContext.Provider value={[isLoggedIn,setLoggedIn]}>
        <LoaderContext.Provider value={[isInitialLoading,setIsInitialLoading]}>
          <Routes>
            {!isLoggedIn ? (
              <>
                <Route path='/' element={<Landing/>}/>
                <Route path='/authenticate' element={<Authentication/>}/>
                <Route path='/verification' element={<Verification/>}/>
              </>
            ) : (
              <>
                <Route path='/' element={<Dashboard/>}>
                  <Route path='' element={<Home/>}/>
                  <Route path='ai-notes' element={<AIPrompt/>}/>
                  <Route path='workspace' element={<Workspace/>}/>
                  <Route path='workspace/new-note' element={<NewNotes/>}/>
                  <Route path='workspace/:id' element={<Note/>}/>
                  <Route path='profile' element={<Profile/>}/>
                  <Route path='folders' element={<Folders/>}/>
                  <Route path='folders/new-folder' element={<NewFolder/>}/>
                  <Route path='folders/edit-folder/:foldername' element={<EditFolder/>}/>
                  <Route path='folders/:foldername' element={<Folder/>}/>
                  <Route path='folders/:foldername/:id' element={<File/>}/>
                </Route>
              </>
            )}
          </Routes>
        </LoaderContext.Provider>
      </UserContext.Provider>
    </div>
  )
}
export default App