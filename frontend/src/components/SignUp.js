import React ,{useRef} from 'react'
import {useNavigate} from "react-router-dom"

const SignUp = () => {
    
    const refName= useRef(null);
    const refEmail = useRef(null);
    const refPassword = useRef(null);
    const refCPassword = useRef(null);


 
    const devApiUrl = 'http://localhost:8080/api';
    // Production environment
    const prodApiUrl = 'https://inotebook-app-mine.onrender.com';
    
    // Determine the API URL based on the environment
    const apiUrl = process.env.NODE_ENV === 'production' ? prodApiUrl : devApiUrl;

    const navigate = useNavigate();

    const handleOnsubmit = async (e) => {
          const password=refPassword.current.value;
          const cpassword=refCPassword.current.value;

          if(password!==cpassword)
          {
             refCPassword.current.value = "Password not matched";
          }
          else {
            refCPassword.current.style={border:"3px solid green"};
            const data = {
              name:refName.current.value,
              email:refEmail.current.value,
              password:refPassword.current.value,
           }
  
          e.preventDefault();
          const url = `${apiUrl}/api/auth/createuser`
          const response = await fetch(url, {
              method: "POST", // *GET, POST, PUT, DELETE, etc
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(data), // body data type must match "Content-Type" header
          });
  
          const userInfo = await response.json();
          console.log(userInfo);
          if(userInfo.success)
          {
              // save tht token into local storage for authorizing the user;
              localStorage.setItem("token",userInfo.token);
              navigate('/');
  
          }
          else
          {
            alert("some error occurred");
          }
          }
            

       
    }

    return (
        <div className='my-3' style={{ width: "60%", margin: "auto" }}>
            <h2 className='text-center'>Sign Up for getting started</h2>
            <form style={{ padding: "20px" }} onSubmit={handleOnsubmit} className='border border-light shadow'>
                <div className="form-group my-2">
                    <input ref={refName} type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" name='name' minLength={5}/>
                </div>
                <div className="form-group my-2">
                    <input ref={refEmail} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" name='email' required />
                </div>
                <div className="form-group my-2">
                    <input ref={refPassword} type="password" className="form-control" id="password" placeholder="Password" name='Enter password' required minLength={5} />
                </div>
                <div className="form-group my-2">
                    <input ref={refCPassword} type="password" className="form-control" id="cpassword" placeholder="Confirm Password" name='cpassword' minLength={5}  required/>
                </div>
                <button type="submit" className="btn  btn-outline-primary btn-sm my-2" >Submit</button>
            </form>
        </div>
    )
}

export default SignUp
