import React from 'react';
import WebcamCapture from './Components/WebcamCapture/WebcamCapture';
import './App.css';
// Route components
function App() {
  return (
    <div className="app">
          <Router>
            <div className="app__body">
                  <Switch>
                     <Route exact path="/test">
                            <h1>Test Page</h1>
                     </Route>

                    <Route path="/">
                        <WebcamCapture />
                    </Route>
                  </Switch>
            </div>
          </Router>
          
    </div>
  );
}

export default App;
