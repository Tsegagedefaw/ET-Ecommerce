import React from "react";
import {StarFill,HeartFill } from 'react-bootstrap-icons'
import './card.css'
export default function ProCard(){
    // console.log(props.product[0].img);
    // const product = props.product;
    return(
        
    <div className="container d-flex flex-column mt-4 mb-4">
       <div className="row d-flex flex-row gap-4">
        <div className="col-8 d-flex justify-content-end">
            <div class="card d-flex flex-wrap justify-content-center gap-4 align-items-center" style={{width: "50rem",height:"20rem"}}>
                <div className="d-flex flex-column ">
                    <a href="#" className="text-decoration-none ">
                        <img src="image/jewelry.png" className="img-fluid" alt="..." width={100}/>
                        <p class="text-center">Jewelry</p></a>
                </div>
                <div>
                <a href="#" className="text-decoration-none">
                    <img src="image/shoes.png" className="img-fluid" alt="..." width={100}/>
                    <p class="text-center">Shoes</p></a>
                </div>
                <div>
                <a href="#" className="text-decoration-none">
                    <img src="image/boy.png" className="img-fluid" alt="..." width={100}/>
                        <p class="text-center">Kids</p></a>
                </div>
                <div>
                <a href="#" className="text-decoration-none">
                    <img src="image/jewelry.png" className="img-fluid" alt="..." width={100}/>
                        <p class="text-center">Accessory</p></a>
                </div>
                <div>
                <a href="#" className="text-decoration-none">
                    <img src="image/boy.png" className="img-fluid" alt="..." width={100}/>
                        <p class="text-center">Kids</p></a>
                </div>
                <div>
                <a href="#" className="text-decoration-none">
                    <img src="image/jewelry.png" className="img-fluid" alt="..." width={100}/>
                        <p class="text-center">Accessory</p></a>
                </div>
            </div>
        </div>
       <div className="col">
       <div class="card" style={{width: "18rem"}}>
            <img src="image/promo.jpg" alt="..."/>
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="text-muted text-center text-decoration-none">Shop Now</a>
            </div>
        </div>
       </div>
       </div>
    </div>
    )
}