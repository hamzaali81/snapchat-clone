import React from "react";
import WebcamCapture from "./Components/WebcamCapture/WebcamCapture";
import "./App.css";
import Preview from "./Components/Preview/Preview";
import Chats from "./Components/Chats/Chats";
import ChatView from "./Components/Chatview/ChatView";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { selectUser } from "./features/appSlice";
import { useSelector,useDispatch } from "react-redux";
import Login from './Components/Login/Login';
// console.log(Chats);
// Route components
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
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
