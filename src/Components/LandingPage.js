import React from 'react'
import add1 from './Images/add1.png';
import add2 from './Images/add2.png';
import add3 from './Images/add3.png';
import add4 from './Images/add4.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

const LandingPage = () => {

    const navigate = useNavigate()

    const [input, setInput] = useState({ email: '', password: '' })

    const [errorMessage, seterrorMessage] = useState('')

    const [successMessage, setsuccessMessage] = useState("")

    


    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const emailValidator = (email) => {
        const emailRegex = /^[^\$@]+@[^\$@]+$/;
        return emailRegex.test(email)
    }

    const passwordValidator = (password) => {
        const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        return passwordRegex.test(password)
    }

    const formSubmit = (e) => {
        e.preventDefault();
        setsuccessMessage('')
        seterrorMessage('')
        if (!emailValidator(input.email))
            return seterrorMessage("please enter valid email id");

        if (!passwordValidator(input.password))
            return seterrorMessage("please enter valid password");

        // setsuccessMessage("Successfully Validated") ;
        if (input.email === "admin@gmail.com" && input.password === "Admin@123")
            // return seterrorMessage("invalid login credentials");
            localStorage.setItem("auth", true)
          navigate('/adminHome')
         window.location.reload(false)

        if (input.email === "user@gmail.com" && input.password === "User@123")
            // return seterrorMessage("invalid login credentials");
            localStorage.setItem("user", true)
            navigate("/home")
            window.location.reload(false)


         
    }

    useEffect((e) => {

        if (localStorage.getItem('auth')) navigate('/adminHome')

        if (localStorage.getItem('user')) navigate('/home')
    }, [])

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
                                    <p className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal">Sign In / Join AJIO</p>

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

            <div className='add1'>
                <img src={add1} class="d-block w-100" alt="..." />
            </div>


            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active"  data-interval="100000" >
                        <img src={add2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" >    
                        <img src={add3} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" >
                        <img src={add4} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


            <div>

                {/* <div className='text-center'>
                    <button type="button" className="btn btn-primary" style={{
                        width: "100px",
                        padding: "5px"
                    }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Login
                    </button> &nbsp;
                    <button type="button" className="btn  btn-primary" style={{
                        width: "100px",
                        padding: "5px"
                    }}>
                        Register
                    </button>
                </div> */}

                <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className='main'>

                                <div className="modal-header">

                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Welcome to AJIO</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <p className=''>Join / Sign In using</p>
                                    <div className='icons'>
                                        <div className='icon1'>
                                            <i className="fa-brands fa-facebook"></i>
                                        </div>
                                        <div className='icon2'>
                                            <i className="fa-brands fa-google"></i>
                                        </div>
                                    </div>
                                    <br></br>
                                    <div className='options'>
                                        <div className='option1'><hr />  </div>
                                        <div className='option2'> Or</div>
                                        <div className='option3'> <hr /></div>
                                    </div>
                                    <br></br>
                                    {errorMessage.length > 0 && (<div style={{ marginBottom: "10px", color: "red" }}>{errorMessage} </div>)}
                                    {successMessage.length > 0 && (<div style={{ marginBottom: "10px", color: "green" }}>{successMessage} </div>)}
                                    <div className='email-area'>
                                        Enter your Email*
                                    </div>

                                    <br></br>
                                    <div className='input-area'>
                                        <input type="email" name="email" onChange={handleChange}></input>

                                    </div><br></br>
                                    <div className='email-area'>
                                        Enter password*
                                    </div>

                                    <br></br>
                                    <div className='input-area'>
                                        <input type="password" name="password" onChange={handleChange}></input>

                                    </div>

                                    <br></br>
                                    <div className="text-center" >

                                        <button type="button" className="btn btn-warning" onClick={formSubmit}>Continue</button>
                                    </div>
                                    <br></br>
                                    <br></br>
                                    <div>
                                        By Signing In, <span><a href='#'> I agree to Terms and Conditions</a></span>.
                                    </div>


                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}

export default LandingPage
