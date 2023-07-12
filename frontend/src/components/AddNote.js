import React, { useContext,useState }  from 'react'
import NoteContext from '../context/notes/NoteContext'

const AddNote = () => {
    const context = useContext(NoteContext);
    const {addNote}= context;
 
    const [note,setNote] = useState({
     title:"",
     desc:"",
     tag:"",
    });
 
    
 
     const handleOnChange=(event)=>{
        setNote({...note,[event.target.name]:event.target.value});
       
     } 
 
     const handleOnSubmit=(e)=>{
       e.preventDefault();
       addNote(note.title, note.desc, note.tag);
       setNote({
        title:"",
        desc:"",
        tag:"",
       });
     } 
 
  return (
    <div>
     
      <h2 className='text-center text-muted mb-4 '>Add Note</h2>
      <form className='my-2 border border-light  shadow' style={{padding:"20px"}}>
        <div className="form-group" style={{marginTop:"5px"}}>
          <label htmlFor="mytitle" >Title</label>
          <input  value={note.title} minLength="6" required  type='name' style={{marginTop:"3px"}}  name="title"  className="form-control" id="mytitle" aria-describedby="emailHelp" placeholder="Enter Title" onChange={handleOnChange} />

        </div>
        <div className="form-group" style={{marginTop:"5px"}}>
          <label htmlFor="desc" >Description</label>
          <input  value={note.desc} minLength="6" required  type='name' style={{marginTop:"3px"}}  name="desc"  className="form-control" id="desc" aria-describedby="emailHelp" placeholder="Enter Description"
           onChange={handleOnChange}/>

        </div>
        <div className="form-group" style={{marginTop:"5px"}}>
          <label htmlFor="tag" >Tag</label>
          <input  value={note.tag} type='name' name="tag"  style={{marginTop:"3px"}}  className="form-control" id="tag" aria-describedby="emailHelp" placeholder="Enter Tag" onChange={handleOnChange}/>

        </div>
        
       
        <button disabled={note.title.length < 3 || note.desc.length < 6} type="submit" onClick={handleOnSubmit} className="btn btn-sm btn-dark" style={{ marginTop: "10px" }}>Submit</button>
      </form>
   
    </div>
  )
}

export default AddNote
