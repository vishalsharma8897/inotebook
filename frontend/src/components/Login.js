import React ,{useRef} from 'react'
import {useNavigate} from "react-router-dom"

const Login = () => {

    const refEmail = useRef(null);
    const refPassword = useRef(null);
    const host = "http://localhost:8080"

    const navigate = useNavigate();

    const handleOnsubmit = async (e) => {
         const data = {
            email:refEmail.current.value,
            password:refPassword.current.value,
         }

        e.preventDefault();
        const url = `${host}/api/auth/login`
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
            console.log(localStorage.getItem("token"));
            navigate('/');

        }
        else {
            alert("Wrong crdentials");
        }


    }

    return (
        <div className='my-3' style={{ width: "60%", margin: "auto" }}>
            <h2 className='text-center'>Login To Look up into your notes</h2>
            <form style={{ padding: "20px" }} onSubmit={handleOnsubmit} className='border border-light shadow'>
                <div className="form-group my-2">
                    <input ref={refEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' />
                </div>
                <div className="form-group my-2">
                    <input ref={refPassword} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' />
                </div>
                <button type="submit" className="btn  btn-outline-primary btn-sm my-2" >Submit</button>
            </form>
        </div>
    )
}

export default Login
