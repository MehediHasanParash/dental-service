import React, { useContext } from 'react';
import { UserContext } from '../../../App';

import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand mb-3" href="#" style={{color: '#1cc7c1'}} >DOCTORS PORTAL</a>
                <button className="navbar-toggler btn-brand" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mb-1 alignment">
                            <Link className="nav-link ms-3 me-3" to="/">Home</Link>
                        </li>
                        <li className="nav-item mb-1 alignment">
                            <Link className="nav-link ms-3 me-3" to="/login">Login</Link>
                        </li>
                        <li className="nav-item mb-1 alignment">
                            <Link className="nav-link ms-3 me-3" to="/dashboard">Dashboard</Link>
                        </li>
                        {/* <li className="nav-item mb-1 alignment">
                            <Link className="nav-link me-5 " to="/dashboard">Admin</Link>
                        </li> */}
                        <li className="nav-item mb-1 alignment">
                            <Link className="nav-link ms-3 me-3 " to="#">Blogs</Link>
                        </li>
                        <li className="nav-item mb-1 active alignment">
                            <Link className="nav-link ms-3 me-3 " to="#">Contact Us</Link>
                        </li>
                        <li className="nav-item mb-1 alignment">
                            {/* <button className="btn btn-danger" onClick={() => setLoggedInUser({})}>Sign Out</button> */}

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
