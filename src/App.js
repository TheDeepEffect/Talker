import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Button, Nav } from 'react-bootstrap';
import ChatApp from './component/ChatApp';


function App() {
  return (
    <div className="App">
      <div>
        <Navbar bg="dark" variant="dark" expand="sm" >
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Brand href="#home">Talker</Navbar.Brand>
          </Navbar.Collapse>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button variant="outline-primary" >
              Log In
         </Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="contain" >
        <div className="video-container" >
          1
        </div>
        
        <div className="receive-container" >
        2
        </div>
        <div className="chat-container">
          <ChatApp/>
        </div>
      </div>

    </div>
  );
}

export default App;
