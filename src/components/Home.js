import React  from 'react'
import NotesWrap from './NotesWrap'

const Home = () => {
 
 
 
  return (
    <div>
       <div className='my-3' style={{width:"75%",margin:"auto"}}>
      <h2 className='text-center text-muted mb-4 '>Add Note</h2>
      <form className='my-2 border border-light  shadow' style={{padding:"20px"}}>
        <div className="form-group" style={{marginTop:"5px"}}>
          <label for="exampleInputEmail1" >Email address</label>
          <input type="email" style={{marginTop:"3px"}}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group" style={{marginTop:"10px"}}>
          <label for="exampleInputPassword1">Password</label>
          <input type="password" style={{marginTop:"3px"}} className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
       
        <button type="submit" className="btn btn-sm btn-dark" style={{marginTop:"10px"}}>Submit</button>
      </form>
       
    <NotesWrap/>
      
    </div>
    </div>
  )
}

export default Home
