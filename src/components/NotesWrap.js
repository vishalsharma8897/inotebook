import {useContext} from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem';

const NotesWrap = () => {
    const context = useContext(NoteContext);
    const {notes, setNotes}= context;

  return (
    <>
    <h2>Your Notes</h2>
    <div className="container">
       <div className="row">
       {
        notes.map((note,index)=>{
          return <NoteItem key = {index} note={note}/>
        })
      }
        </div> 
     
    </div>
    </>
    
  )
}

export default NotesWrap
