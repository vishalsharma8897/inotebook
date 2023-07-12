import React from 'react'
import { Link,useLocation ,useNavigate} from 'react-router-dom';
const Navbar = () => {
      const location= useLocation();
      
      const navigate= useNavigate();

      const handleOnLogout=()=>{
        localStorage.removeItem("token");
        navigate('/login');
      }
    return (
   
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item ">
                                <Link className={`nav-link ${location.pathname=='/'? "active":''}`} aria-current="page" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname=='/about'? "active":''}`} aria-current="page" to="/about">About</Link>
                            </li>



                        </ul>
                       { !localStorage.getItem("token") ? <div className="d-flex" >
                         {location.pathname!=='/login'&& <Link className="btn btn-outline-light mx-2 btn-sm" to="/login" role="button">Login</Link>}
                        {location.pathname!=='/signUp'&& <Link className="btn btn-light mx-2 btn-sm" to="/signUp" role="button">SignUp</Link>}
                        </div>:<button className='btn btn-primary' onClick={handleOnLogout}>Log Out</button>}
                    </div>
                </div>
            </nav>

    )
}

export default Navbar
