import { Login } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const NavBar = () => {

    const navigate = useNavigate();
    return (
        <>
            <div className='landingpage-navbar'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">AJIO</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse display-category" id="navbarSupportedContent">

                            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">MEN</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">WOMEN</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">KIDS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">INDIE</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">HOME AND KITCHEN</a>
                                </li>
                                <li className="nav-item login">
                                    <p className="nav-link" onClick={() => navigate('/login')} >Sign In / Join AJIO</p>

                                </li>

                            </ul>



                            <form className="d-flex" role="search">
                                <input className="form-control rounded-pill py-1 border-right-0 border me-4" type="search" placeholder="Search AJIO" aria-label="Search" />

                                <div className='me-3'>
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                                &nbsp;
                                <div className='me-3'>
                                    <i class="fa-solid fa-bag-shopping"></i>
                                </div>

                            </form>
                        </div>
                    </div>
                </nav>

            </div>
        </>
    )
}

export default NavBar
