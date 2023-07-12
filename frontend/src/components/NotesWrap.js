import { useContext, useEffect, useRef, useState } from 'react'
import {useNavigate} from "react-router-dom"
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem';


const NotesWrap = () => {
  const context = useContext(NoteContext);
  const { notes, fetchNotes, editNote } = context;
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      fetchNotes();
    }
    else {
      navigate('/login');
    }
  }, []);

  const ref = useRef("");

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edesc: "",
    etag: "",
  });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edesc: currentNote.desc,
      etag: currentNote.tag,
    });
  }

  const handleonUpdate = (e) => {
    e.preventDefault();
    editNote(note.id, note.etitle, note.edesc, note.etag);
  }


  const handleOnChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value });
  }

  return (
    <>


      {/* <!-- Button trigger modal --> */}
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-center" id="exampleModalLabel"><span className='mx-3'>Edit Note</span></h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className='my-2 border border-light  shadow' style={{ padding: "20px" }}>
                <div className="form-group" style={{ marginTop: "5px" }}>
                  <label htmlFor="mytitle" >Title</label>
                  <input minLength="6" required type='type' style={{ marginTop: "3px" }} name="etitle" className="form-control" id="mytitle" aria-describedby="emailHelp" placeholder="Enter Title" value={note.etitle} onChange={handleOnChange} />

                </div>
                <div className="form-group" style={{ marginTop: "5px" }}>
                  <label htmlFor="desc" >Description</label>
                  <input minLength="6" required type='type' style={{ marginTop: "3px" }} name="edesc" className="form-control" id="edesc" aria-describedby="emailHelp" placeholder="Enter Description" value={note.edesc}


                    onChange={handleOnChange} />

                </div>
                <div className="form-group" style={{ marginTop: "5px" }}>
                  <label htmlFor="tag" >Tag</label>
                  <input type='type' name="etag" style={{ marginTop: "3px" }} className="form-control" id="etag" aria-describedby="emailHelp" placeholder="Enter Tag" onChange={handleOnChange} value={note.etag} />

                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length < 3 || note.edesc.length < 6} onClick={handleonUpdate} type="button" className="btn btn-primary" data-bs-dismiss="modal">Update Note</button>
            </div>
          </div>
        </div>
      </div>

      <h2>Your Notes</h2>
      {
        notes.length === 0 ? "No Notes to display .. You can add some notes😉" :
          <div className="container">
            <div className="row">
              {
                notes.map((note, index) => {
                  return <NoteItem key={index} updateNote={updateNote} note={note} />
                })
              }
            </div>
          </div>
      }



    </>

  )
}

export default NotesWrap
