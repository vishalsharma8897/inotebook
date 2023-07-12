import './App.css'
import {useEffect} from "react"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import { useState } from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  const [message,setMessage]= useState("");
  useEffect(() => {
    const handleWindowClose = () => {
      localStorage.removeItem('token');
    };
  
    window.addEventListener('beforeunload', handleWindowClose);
  
    return () => {
      window.removeEventListener('beforeunload', handleWindowClose);
    };
  }, []);
  
  return (
    <>
      <NoteState>
        <BrowserRouter>
            <Navbar />
            <Alert message={message}/>
          <div className="container">

            <Routes>
               
              <Route exact path="/" element={<Home setMessage={setMessage}/>}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/login" element={<Login/>}></Route>
              <Route exact path="/signUp" element={<SignUp/>}></Route>

            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
