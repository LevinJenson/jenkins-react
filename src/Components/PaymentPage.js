import React from 'react'
import { useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import '../Components/PaymentPage.css';
import credit_card from './Images/credit_card.png';
import card_img from './Images/card_img.png'
import { Payment } from '@mui/icons-material'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';



const PaymentPage = () => {
    const id = useParams();

    useEffect(() => {

        const getPrice = () => {

            console.log(id.price)
           
        }
        getPrice();
    }, []);
    const navigate = useNavigate();

    return (
        <>
            <div className="main-area-body">


                <div className="grid text-center main-area-second-body"  >


                    <div class="g-col-6 g-col-md-4 left-side">

                        <p className='credit-card'> <Payment></Payment>&nbsp;Credit Card</p><hr></hr>
                        <p><Payment></Payment>&nbsp;Debit Card</p><hr></hr>
                        <p><Payment></Payment>&nbsp;Debit Card + ATM PIN</p><hr></hr>
                        <p><AccountBalanceIcon></AccountBalanceIcon>&nbsp;Internet Banking</p><hr></hr>
                        <p><img src={credit_card} style={{ height: "20px" }}></img> &nbsp;UPI</p>


                    </div>

                    <div class="g-col-6 g-col-md-4 middle">
                        <div className='options'>
                            <div className='option1'>
                                <p>Pay by Credit Card</p>
                            </div>
                            <div className='option2'>
                                <p>Pay by AmEx ezeClick</p>
                            </div>

                        </div>

                        <div class="image-area">
                            <img src={card_img} />
                        </div>
                        <div class="inputBox">
                            <span className='card-number'> Card Number </span>
                            <input type="number" name='cardNumber' value='cardNumber' placeholder="1111-2222-3333-4444" />
                        </div>


                        <div class="flex">
                            <div class="inputBox">
                                <span>Expiration Date</span>
                                <input type="text" placeholder="january" />
                            </div>
                            <div class="inputBox">
                                <span>Year</span>
                                <input type="number" placeholder="2022" />
                            </div>
                            <div class="inputBox">
                                <span>CVV/CVC</span>
                                <input type="number" placeholder="1234" />
                            </div>
                        </div>
                        <div class="inputBox">
                            <span className='card-holder-name'>Card Holder Name </span>
                            <input type="text" placeholder="mr. john deo" />
                        </div>

                        <button className='btn btn-warning'>Make Payment</button>
                        <p className='cancel-payment' onClick={() =>navigate(-1)}>Cancel</p>
                    </div>

                    <div class="g-col-6 g-col-md-4 right-side">

                        <div className='Amount-section'>
                            <p>Merchant Name</p>
                            <p>National Institute of Construction Management & Research</p>
                            <p className='amount'>Payment Amount ₹ {id.price}.00</p>
                        </div>


                    </div>
                </div>
            </div>


        </>
    )
}

export default PaymentPage
