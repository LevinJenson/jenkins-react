import React, { useState } from 'react'
import NavBar from './NavBar'
import homeadd4 from './Images/homeadd4.png'

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import '../Components/HomePage.css'

const HomePage = () => {

    const navigate = useNavigate()
    const [logout, setlogout] = useState(false)

    useEffect(() => {
        if (!localStorage.getItem('user')) navigate('/')
    }, [logout])


    const logoutHandle = (e) => {
        e.preventDefault();
        localStorage.removeItem('user')
        setlogout(true)
    }

    const [input, setInput] = useState({ brandName: '', description: '', productCategory: '', actualPrice: '', offerPrice: '', imageUrl: '' })

    const handleChange = (e) => {

        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const [productsList, setProductsList] = useState([])
    const [render, setRender] = useState(false)


    useEffect(() => {

        axios.get("http://localhost:8080/all").then(
            (response) =>
                setProductsList(response.data), setRender(!render))

    }, [])

    const filteredResultAll = () => {
        axios.get("http://localhost:8080/all")
            .then((respone) => {
                setProductsList(respone.data)
            })
    }

    const filteredResult = (categoryName) => {
        axios.get(`http://localhost:8080/all/${categoryName}`)
            .then((respone) => {
                setProductsList(respone.data)
            })
    }

    const [search, setSearch] = useState("")

    return (
        <div>
            {/* <div className='landingpage-navbar'> */}
            <nav className="navbar fixed-top navbar-expand-lg bg-white">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">AJIO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse display-category" id="navbarSupportedContent">

                        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => filteredResultAll()}>ALL</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => filteredResult('MEN')}>MEN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => filteredResult('WOMEN')}>WOMEN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => filteredResult('KIDS')}>KIDS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => filteredResult('INDIE')}>INDIE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => filteredResult('HOME')}>HOME AND KITCHEN</a>
                            </li>
                            <li className="nav-item login">
                                <p className="nav-link" onClick={logoutHandle} >Logout</p>


                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control rounded-pill py-1 border-right-0 border me-4" onChange={(e) => setSearch(e.target.value)} type="search" placeholder="Search AJIO" aria-label="Search" />

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

            {/* </div> */}
            <div className='firstAdd'>
                <img src={homeadd4} class="d-block w-100" alt="..." />
            </div>


            <div className='gallery'>
                {productsList.filter((item) =>

                    item.description.toLowerCase().includes(search)).map((item) => {
                        return (
                            <div className='content' key={item.productId}>
                                <img src={item.imageUrl} className="card-image" />
                                <p className='flexible flexible1'>{item.brandName}</p>
                                <p className='flexible flexible2'>{item.description}</p>
                                <p className='flexible flexible3'>₹{item.offerPrice} <span className='flexible31'><del>₹{item.actualPrice}</del> </span></p>
                                <NavLink to={`/products/${item.productId}`}><button className='buyNow' ><span className='star-icon'><i class="fa-solid fa-star"></i></span>&nbsp;BBS Price ₹{item.offerPrice}</button></NavLink> <br></br>

                            </div>
                        );
                    })}

            </div>



        </div>
    )
}

export default HomePage
