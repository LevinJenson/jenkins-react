import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';
import { BsCart } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Products = () => {


    const navigate = useNavigate()
    const id = useParams();
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const [cart, setCart] = useState([])


    useEffect(() => {

        const getProduct = async () => {

            console.log(id.id)
            setLoading(true)
            await axios.get("http://localhost:8080/id",
                { params: { id: id.id } }
            ).then((response) => {
                setProduct(response.data)
                // setCart(response.data)

                setLoading(false)
            })

        }
        getProduct();
    }, []);

    const productAddedMessage = () => {

        toast.success('product Added Successfully', {
            closeButton: false,
            position: toast.POSITION.TOP_RIGHT
        });

    };


    const addToCart = async (id) => {

        await axios.get(`http://localhost:8080/id/${id}`)
            .then((response) => {
                setCart(response.data)
            })
            productAddedMessage();

    }

    const Loading = () => {

        return (
            <>
                Loading....
            </>
        )
    }

    const redirectToPayment = (amount) =>{
        navigate(`/payment/${amount}`)
        window.location.reload()    
    }

    const ShowProduct = () => {



        return (
            <>

                <div className='col-md-6'>
                    <img src={product.imageUrl} alt={product.brandName} height="400px" />
                </div>
                <div className='col-md-6'>
                    <h4 className='rext-uppercase  fw-bold'>
                        {product.brandName}
                    </h4>
                    <h1 className='display-5'>
                        {product.description}
                    </h1>

                    <p className='lead fw-bolder'>
                        Rating 4.4 &nbsp;
                        <i className='fa fa-star' style={{color:'orange'}}></i>
                    </p>
                    <h3 className='display-6 fw-bold my-4'>
                        ₹{product.offerPrice} <span className='flexible32'><del>₹{product.actualPrice}</del> </span>
                    </h3>
                    <p className='lead'>
                        Our all products go through strict quality by our experts and product should not be neither damaged nor defective in any way. Product image modelling is done by professionals with best contrast and background so customer may feel slight colour or style variation.
                    </p>

                    <button className='btn btn-outline-dark' onClick={() => addToCart(product.productId)}> <BsCart size={"1.5rem"} /> Add to Cart</button>
                    <ToastContainer />

                </div>

            </>

        )
    }

    return (
        <div>


            <div className='landingpage-navbar'>
                <nav className="navbar fixed-top navbar-expand-lg bg-white">
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
                                    <p className="nav-link" onClick={() => navigate('/home')} >Go Back</p>

                                </li>

                            </ul>



                            <form className="d-flex" role="search">
                                <input className="form-control rounded-pill py-1 border-right-0 border me-4" type="search" placeholder="Search AJIO" aria-label="Search" />

                                <div className='me-3'>
                                    <i class="fa-solid fa-heart" ></i>
                                </div>
                                &nbsp;

                                <div className='me-3'>
                                    < BiCart size={"1.5rem"} data-bs-toggle="modal" data-bs-target="#exampleModal-cart" style={{ cursor: "pointer" }} />

                                </div>

                            </form>
                        </div>
                    </div>
                </nav>

            </div>

            <br></br><br></br><br></br><br></br>


            <div className='container'>
                <div className='row'>
                    {loading ? <Loading /> : <ShowProduct />}
                </div>

            </div>

            {/* cart popup */}
            <div className="modal fade" id="exampleModal-cart" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title1 fs-5 text-center fw-bolder " id="exampleModalLabel" style={{marginLeft:"200px"}}> <BsCart size={"1.5rem"} /> Cart</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='col-md-12 text-center'>
                                <img src={cart.imageUrl} alt={product.brandName} height="200px" />
                            </div> <br></br>
                            <div className='col-md-12'>
                                <h4 className='rext-uppercase  fw-bold text-center' >
                                    {cart.brandName}
                                </h4>
                                <h1 className='display-5 text-center'>
                                    {cart.description}
                                </h1>

                                <p className='lead fw-bolder'>
                                    Rating 4.4 &nbsp;
                                    <i className='fa fa-star' style={{color:'orange'}}></i>
                                </p>
                                <h3 className='display-6 fw-bold my-4'>
                                    ₹{cart.offerPrice} <span className='flexible32'><del>₹{cart.actualPrice}</del> </span>
                                </h3>
                                <p className='lead'>
                                    Our all products go through strict quality by our experts and product should not be neither damaged nor defective in any way. Product image modelling is done by professionals with best contrast and background so customer may feel slight colour or style variation.
                                </p>
                                
                                <p className=''>
                                <i className='fa fa-star' style={{color:"red"}}></i> You have saved <span className='fw-bold'>₹{cart.actualPrice - cart.offerPrice}</span> in this order
                                </p>
                            </div>
                        </div>
                        <div className="modal-footer">
                       <button type="button" onClick={() => redirectToPayment(cart.offerPrice)} className="btn btn-success" >Pay Now &nbsp;₹{cart.offerPrice}</button>
                           {/* onClick={() => navigate(`/payment/${cart.offerPrice}`)} */}
                        </div>
                    </div>
                </div>
            </div>
            {/* cart popup ends here */}

        </div>
    )
}

export default Products
