import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';




const Modell = () => {
  const navigate = useNavigate()

  const [input, setInput] = useState({ email: '', password: '' })

  const [errorMessage, seterrorMessage] = useState('')

  const [successMessage, setsuccessMessage] = useState("")

  useEffect((e) => {

    if (localStorage.getItem('auth')) navigate('/adminHome')

    if (localStorage.getItem("user")) navigate('/home')
  }, [])


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
    navigate("/adminHome")
    window.location.reload(false)

    if (input.email === "user@gmail.com" && input.password === "User@123")
      // return seterrorMessage("invalid login credentials");
      localStorage.setItem("user", true)
    navigate("/home")
     window.location.reload(false)

    
  }
  return (
    <div>

      <div className='text-center'>
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
      </div>

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
  )
}

export default Modell