import React from "react";
import {PlayFill,ChevronRight} from 'react-bootstrap-icons'
export default function Slide(){


    return(
        <div className="container mb-4 shadow ">
                <div className="d-md-flex h-50" >
                    <div className="col d-flex flex-column  align-items-start mx-4 justify-content-center">
                        <p className="fs-6 fw-light lead">Has just arrived! on time!</p>
                        <p className="fs-1 fw-bold">Huge Summery Collection  <br/> For Feta Verse</p>
                        <p className="fs-6 ">Fashion is part of the daily air and it changes<br/>all the time, with all the events.</p>
                        <div className="d-flex gap-4">
                            <button className="btn bg-dark text-white">Shop Now</button>
                            <button className="btn bg-danger text-white"><PlayFill size={20}/></button>
                            <span className="d-flex align-items-center">What's Trending?</span>
                        </div>
                    </div>
                    <div className="col">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="https://img.freepik.com/free-psd/horizontal-banner-template-big-sale-with-woman-shopping-bags_23-2148786755.jpg?size=626&ext=jpg&ga=GA1.2.1295759226.1663066321&semt=sph"
                             class="img-fluid" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src="https://img.freepik.com/premium-vector/online-shopping-store-website-mobile-phone-design-smart-business-marketing-concept-horizontal-view-vector-illustration_62391-460.jpg?size=626&ext=jpg&ga=GA1.2.1295759226.1663066321&semt=sph"
                            class="img-fluid" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src="https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-with-photo_23-2149000923.jpg?size=626&ext=jpg&ga=GA1.2.1295759226.1663066321&semt=sph"
                            class="img-fluid" alt="..."/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
    )
}

