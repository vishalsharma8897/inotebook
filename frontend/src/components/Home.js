import React from 'react'
import NotesWrap from './NotesWrap'
import AddNote from './AddNote';


 

const Home = () => {
  console.log(localStorage.getItem("token"));
  return ( 
      <div className='my-3' style={{ width: "75%", margin: "auto" }}>
        
     <AddNote />
    <NotesWrap/>
    </div>
  )
}

export default Home
