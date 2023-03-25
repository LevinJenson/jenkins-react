import React, { useState } from 'react'
import homeadd4 from './Images/homeadd4.png'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../Components/HomePage.css'


const AdminHomePage = () => {

    const navigate = useNavigate()
    const [logout, setlogout] = useState(false)

    const [input, setInput] = useState({ brandName: '', description: '', productCategory: '', actualPrice: '', offerPrice: '', imageUrl: '' })
    let deletingProductId = '';

    useEffect((e) => {

        if (!localStorage.getItem('auth')) navigate('/')

    }, [logout])


    const logoutHandle = (e) => {
        e.preventDefault();
        localStorage.removeItem('auth')
        setlogout(true)
    }

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


    const addNewProduct = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:8080/", input)
            .then((response) => {
                console.log(response.data)
                if (response.status === 200) {
                    console.log(response)
                    window.location.reload()
                }
            })

        setRender(!render)


    }


    const productDeleteEvent = (productId) => {

        deletingProductId = productId;

    }
    const deleteProduct = () => {
        console.log(deletingProductId);
        axios.delete(`http://localhost:8080/delete/${deletingProductId}`)
            .then((response) => {
                console.log(response.data)
            })

        setRender(!render)
        window.location.reload()

    }

    const filteredResult = async (categoryName) =>{
      await axios.get(`http://localhost:8080/all/${categoryName}`)
        .then((response) =>{
            
            setProductsList(response.data)

        });
            
    }
    const filteredResultAll = async() =>{
     
        await axios.get("http://localhost:8080/all")
        .then((respone) =>{
            setProductsList(respone.data)
        })

    }

    const[search,setSearch] = useState("")

    

    return (
        <>

            {/* <div className='Adminpage-navbar'> */}
            <nav className="navbar fixed-top navbar-expand-lg bg-white">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">AJIO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse display-category" id="navbarSupportedContent">

                        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0 categorirs">

                            <li className="nav-item">
                                <a className="nav-link add-item" aria-current="page" data-bs-toggle="modal" data-bs-target="#exampleModal">Add New Product</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={()=>filteredResultAll()}>ALL</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={()=>filteredResult('MEN')}>MEN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={()=>filteredResult('WOMEN')}>WOMEN</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={()=>filteredResult('KIDS')}>KIDS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={()=>filteredResult('INDIE')}>INDIE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={()=>filteredResult('HOME')}>HOME AND KITCHEN</a>
                            </li>
                            <li className="nav-item logout">
                                <p className="nav-link" onClick={logoutHandle} >Logout</p>
                            </li>

                        </ul>



                        <form className="d-flex" role="search">
                            <input className="form-control rounded-pill py-1 border-right-0 border me-4" onChange={(e) =>setSearch(e.target.value)} type="search" placeholder="Search AJIO" aria-label="Search" />

                            <div className='me-3'>
                                <i className="fa-solid fa-heart"></i>
                            </div>
                            &nbsp;
                            <div className='me-3'>
                                <i className="fa-solid fa-bag-shopping"></i>
                            </div>

                        </form>
                    </div>
                </div>
            </nav>

            {/* Add new product starts here */}

            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className='main'>

                            <div className="modal-header title">
                                <h1 className="add-new-item-title fs-5" id="exampleModalLabel">Add New Item</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={(e) => addNewProduct(e)}>

                                    <div className="form-section">
                                        <label htmlFor="input-name"><b>Name</b></label>
                                        <input required={true} type="text" id="input-name" onChange={handleChange} name='brandName' placeholder="LEVIS"></input>
                                    </div><br></br>
                                    <div className="form-section">
                                        <label htmlFor="input-description"><b>Description</b></label>
                                        <input required={true} type="text" id="input-description" onChange={handleChange} name='description' placeholder="Crew-Neck Cotton Sweatshirt"></input>
                                    </div><br></br>
                                    <div className="form-section">
                                        <label htmlFor="input-category"><b>Category</b></label> &nbsp;
                                        <select required={true} type="text" id="input-category" onChange={handleChange} name='productCategory'>
                                            <option value="MEN">MEN</option>
                                            <option value="WOMEN">WOMEN</option>
                                            <option value="KIDS">KIDS</option>
                                            <option value="HOME">HOME</option>
                                            <option value="INDIE">INDIE</option>
                                        </select>
                                    </div><br></br>



                                    <div className="form-section">
                                        <label htmlFor="input-actualprice" min={0}><b>Actual Price</b></label>
                                        <input required={true} type="number" id="input-actualprice" onChange={handleChange} name='actualPrice' placeholder="2800"></input>

                                    </div><br></br>
                                    <div className="form-section">
                                        <label htmlFor="input-offerprice" min={0}><b>Offer Price</b></label>
                                        <input required={true} type="number" id="input-offerprice" onChange={handleChange} name='offerPrice' placeholder="1700"  ></input>
                                    </div><br></br>




                                    <div className="form-section">
                                        <label htmlFor="input-imageurl" ><b>Image url</b></label>

                                        <input required={true} type="text" id="input-imageurl" onChange={handleChange} name='imageUrl' placeholder="Https://source.unsplash.com/random"></input>

                                    </div> <br></br>

                                    <div className="submit-btn">
                                        <button type="submit" className="btn btn-sm btn-success" data-bs-dismiss="modal" >Add</button>
                                    </div>

                                </form>
                            </div>

                        </div>


                    </div>
                </div>
            </div>



            {/* </div> for advertisement */}
            <div className='firstAdd'>
                <img src={homeadd4} className="d-block w-100" alt="..." />
            </div>



            {/* delete pop up */}
            <div className="modal fade" id="exampleModal2" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog" >
                    <div className="modal-content" >


                        <div className="modal-footer">

                            <h1 className=" fs-5" id="exampleModalLabel">Are you sure to delete this item?</h1>
                            <br></br> <br></br> <br></br> <br></br>
                            <div>
                                <button type="button" className="btn btn-danger delete" data-bs-dismiss="modal" style={{
                                    width: "100px",
                                    marginRight: "160px",
                                    padding: "5px"
                                }} onClick={deleteProduct}>Delete</button>
                                <button type="button" className="btn btn-secondary cancel" data-bs-dismiss="modal" style={{
                                    width: "100px",
                                    marginRight: "50px",
                                    padding: "5px"
                                }}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* delete popup end here */}


            {/* Display theavailable products starts here */}
            <div className='gallery'>
                {productsList.filter((item) => item.description.toLowerCase().includes(search)).map((item) => {
                    return (
                        <div className='content' key={item.productId}>

                            <img src={item.imageUrl} className="card-image" />
                            <p className='flexible flexible1'>{item.brandName}</p>
                            <p className='flexible flexible2'>{item.description}</p>
                            <p className='flexible flexible3'>₹{item.offerPrice} <span className='flexible31'><del>₹{item.actualPrice}</del> </span></p>
                            <button className='buyNow' ><span className='star-icon'><i className="fa-solid fa-star"></i></span>&nbsp;BBS Price ₹{item.offerPrice}</button> <br></br>
                            <button className='buyNow deleteNow' value={item.productId} onClick={(e) => productDeleteEvent(e.target.value)} data-bs-toggle="modal" data-bs-target="#exampleModal2"><span className='trash-icon'><i className="fa-solid fa-trash"></i></span>&nbsp;Delete</button>

                        </div>

                    );
                })}

            </div>

            {/* Display theavailable products ends here */}

        </>
    )
}

export default AdminHomePage
