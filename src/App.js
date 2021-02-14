import React from 'react';
import WebcamCapture from './Components/WebcamCapture/WebcamCapture';
import './App.css';
import Preview from './Components/Preview/Preview';
import Chats from './Components/Chats/Chats';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// Route components
function App() {
  return (
    <div className="app">
          <Router>
            <div className="app__body">
                  <Switch>
                     <Route exact path="/chats">
                          <Chats />
                     </Route>
                     <Route exact path="/preview">
                          <Preview />
                     </Route>

                    <Route exact path="/">
                        <WebcamCapture />
                    </Route>

                  </Switch>
            </div>
          </Router>
       
    </div>
  );
}

export default App;
