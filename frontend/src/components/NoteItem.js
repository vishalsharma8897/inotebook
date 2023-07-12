import NoteContext from "../context/notes/NoteContext";
import { useContext } from "react";

const NoteItem = (props) => {
    const { note , updateNote } = props;
   const {deleteNote} = useContext(NoteContext);

    return (
        <div className="col-md-6">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    {/* <h6 className="card-subtitle mb-2 text-muted">{note.tag}</h6> */}
                    <p className="card-text">{note.desc}</p>
                    <i className="fas fa-trash-alt mx-2 text-danger" onClick={()=>{
                        deleteNote(note._id);
                    }}></i>

                  
                    <i className="fas fa-edit mx-2 text-success" onClick={()=>{
                        updateNote(note);
                        
                    }}></i>

                </div>
            </div>
        </div>
    )
}

export default NoteItem
