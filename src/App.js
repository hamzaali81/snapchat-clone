import React, { useEffect } from "react";
import WebcamCapture from "./Components/WebcamCapture/WebcamCapture";
import "./App.css";
import Preview from "./Components/Preview/Preview";
import Chats from './Components/Chats/Chats';
import ChatView from "./Components/Chatview/ChatView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { selectUser } from "./features/appSlice";
import { useSelector,useDispatch } from "react-redux";
import Login from './Components/Login/Login';
import { auth } from "./firebase";
import { login,logout } from "./features/appSlice";
// console.log(Chats);
// Route components
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
   
  useEffect(() => {
    auth.onAuthStateChanged((authUser)=> {
        if (authUser) {
            // User is signed in.
            dispatch(login({
              username: authUser.displayName,
              profilePic: authUser.photoURL,
              id: authUser.id
            }))
        } else {
            // User is signed out.
            dispatch(logout())
        }
    });
  })


  return (
    <div className="app">
      <Router>
        {
          !user ? (
            <Login />
          )
          : (
<div className="app__body">
          <Switch>
            <Route path="/chats/view">
              <ChatView />
            </Route>
            <Route path="/preview">
              <Preview />
            </Route>

            <Route path="/chats">
              <Chats />
            </Route>

            <Route exact path="/">
              <WebcamCapture />
            </Route>
          </Switch>
        </div>
          )
        }

        
      </Router>
    </div>
  );
}

export default App;
