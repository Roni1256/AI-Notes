import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Landing from "./pages/Landing";
import Authentication from "./pages/Authentications/Authentication";
import Verification from "./pages/Authentications/Verification";
import endpoints from "./endpoints/endpoints";
import { axiosInstance } from "./context/axios";
import { createContext } from "react";
import Loader from "./components/styleComponents/Loader";
import AIPrompt from "./pages/AI/pages/AIPrompt";
import Workspace from "./pages/Workspace/Workspace";
import NewNotes from "./pages/Notes/NewNotes";
import Note from "./pages/Notes/Note";
import Profile from "./pages/Authentications/Profile";
import Folders from "./pages/Folder/Folders";
import NewFolder from "./pages/Folder/NewFolder";
import Folder from "./pages/Folder/Folder";
import File from "./pages/Folder/File";
import EditFolder from "./pages/Folder/EditFolder";
import { Navigate } from "react-router-dom";
import PPTHome from "./pages/PPT/PPTHome";
import Programmers from "./pages/Programmers/Programmers";
import FlowchartHome from "./pages/Flowcharts/FlowchartHome";

export const UserContext = createContext();
export const LoaderContext = createContext();

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  const navigate = useNavigate();
  useEffect(() => {
    const checkUser = async () => {
      try {
        setIsInitialLoading(true);
        const resp = await axiosInstance.get(endpoints.currentUser);
        if (!resp.data) {
          setIsInitialLoading(false);
          setLoggedIn(false);
          navigate("/");
          return;
        }
        setLoggedIn(resp.data);
        setIsInitialLoading(false);
      } catch (error) {
        setLoggedIn(false);
        // navigate('/authenticate');
        setIsInitialLoading(false);
      }
    };
    checkUser();
  }, [navigate]);

  if (isInitialLoading) {
    return <Loader />;
  }
  return (
    <div className="">
      <UserContext.Provider value={[isLoggedIn, setLoggedIn]}>
        <LoaderContext.Provider value={[isInitialLoading, setIsInitialLoading]}>
          <Routes>
            <Route
              path="/"
              element={!isLoggedIn ? <Landing /> : <Navigate to="/workspace" />}
            />
            <Route
              path="/authenticate"
              element={
                !isLoggedIn ? <Authentication /> : <Navigate to="/workspace" />
              }
            />
            <Route
              path="/verification"
              element={
                !isLoggedIn ? <Verification /> : <Navigate to="/workspace" />
              }
            />

            <Route
              path="/"
              element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
            >
              <Route
                path="ai-notes"
                element={isLoggedIn ? <AIPrompt /> : <Navigate to="/" />}
              />
              <Route
                path="workspace"
                element={isLoggedIn ? <Workspace /> : <Navigate to="/" />}
              />
              <Route
                path="workspace/new-note"
                element={isLoggedIn ? <NewNotes /> : <Navigate to="/" />}
              />
              <Route
                path="workspace/:id"
                element={isLoggedIn ? <Note /> : <Navigate to="/" />}
              />
              <Route
                path="profile"
                element={isLoggedIn ? <Profile /> : <Navigate to="/" />}
              />
              <Route
                path="folders"
                element={isLoggedIn ? <Folders /> : <Navigate to="/" />}
              />
              <Route
                path="folders/new-folder"
                element={isLoggedIn ? <NewFolder /> : <Navigate to="/" />}
              />
              <Route
                path="folders/edit-folder/:foldername"
                element={isLoggedIn ? <EditFolder /> : <Navigate to="/" />}
              />
              <Route
                path="folders/:foldername"
                element={isLoggedIn ? <Folder /> : <Navigate to="/" />}
              />
              <Route
                path="folders/:foldername/:id"
                element={isLoggedIn ? <File /> : <Navigate to="/" />}
              />
              <Route
                path="ppt"
                element={isLoggedIn ? <PPTHome /> : <Navigate to="/" />}
              />
              <Route
                path="programming"
                element={isLoggedIn ? <Programmers /> : <Navigate to="/" />}
              />
              <Route
                path="flowchart"
                element={isLoggedIn ? <FlowchartHome /> : <Navigate to="/" />}
              />
            </Route>
          </Routes>{" "}
        </LoaderContext.Provider>
      </UserContext.Provider>
    </div>
  );
};
export default App;
