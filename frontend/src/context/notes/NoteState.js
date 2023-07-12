import { useState } from "react";
import NoteContext from "./NoteContext"
// import Alert from "../../components/Alert";
const NoteState = (props) => {

 
  const host = "http://localhost:8080";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  const fetchNotes = async() => {
    const url = `${host}/api/notes/fetchnotes`;

    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc
      headers: {
        "auth-token": localStorage.getItem("token")
      },
    });
    const json = await response.json();
    setNotes(json);
     
  }



  const addNote = async(title, desc, tag) => {
  
    const url = `${host}/api/notes/addNote`
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")

      },
      body: JSON.stringify({title,desc,tag}), // body data type must match "Content-Type" header
    });
    
     const note = await response.json();
 

    setNotes([...notes, note]);
  }

  const deleteNote = async(id) => {
    // api call to database to delete the ele in database 
    const url = `${host}/api/notes/deletenote/${id}`
    const response = await fetch(url, {
     method: "DELETE", // *GET, POST, PUT, DELETE, etc
     headers: {
       "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")

     },
   });
  

    // client side deleting;
    const newarray = notes.filter((note) => note._id !== id);
    setNotes(newarray);
  }

  const editNote = async (id, title, desc, tag) => {
    // API CALL
   
     const data = {title,desc,tag}
    const url = `${host}/api/notes/updatenote/${id}`
    const response = await fetch(url, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")

      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

      const jsonNote = await response.json();
       
   

      const updatedArray = notes.map((note)=>{
      if(note._id == id)
      {
        note.title=jsonNote.title;
        note.desc=jsonNote.desc;
        note.tag=jsonNote.tag;
      }

      return note;
     })
     

    setNotes(updatedArray);

  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,fetchNotes }}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;