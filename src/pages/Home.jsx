import React from "react";
import TopNav from "../Components/TopNav/topnav";
import NavBar from "../Components/NavBar/Navbar";
import Card from "../Components/card/card";
import Slide from "../Components/slide/slide";
import CardSecond from '../Components/card/CardSecond'
import ProCard from '../Components/card/Procard'
import Footer from "../Components/Footer/footer";
import {Modem,Laptop,Controller,Cpu,Dribbble,Earbuds,Tablet,Funnel } from 'react-bootstrap-icons'

import './home.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Home(){

    const product = [
    {
        id:'1',
        name:'iphone 13 pro max',
        category:'mobile and tablet',
        price:'$2300',
        rate:'4.5',
        img:'logo512.png',
        description:'ram-6gb storage-258gb screen-full-hd camera: main - 48px front-32px'
    },
    {
        id:'2',
        name:'iphone 13 pro max',
        category:'mobile and tablet',
        price:'$2300',
        rate:'4.5',
        img:'logo512.png',
        description:'ram-6gb storage-258gb screen-full-hd camera: main - 48px front-32px'
    },
    {
        id:'3',
        name:'iphone 13 pro max',
        category:'mobile and tablet',
        price:'$2300',
        rate:'4.5',
        img:'logo512.png',
        description:'ram-6gb storage-258gb screen-full-hd camera: main - 48px front-32px'
    },
    {
        id:'4',
        name:'iphone 13 pro max',
        category:'mobile and tablet',
        price:'$2300',
        rate:'4.5',
        img:'logo512.png',
        description:'ram-6gb storage-258gb screen-full-hd camera: main - 48px front-32px'
    }
]
    return(
        <div className="">
            <TopNav/>
            <NavBar/>
            <Slide/>
            <div className="container">
                <p className="fs-4 d-flex justify-content-between">
                    <span>Category</span>
                    <span><Funnel/></span>
                </p>
                <div className="d-flex scroll shadow text-muted justify-content-center pt-3">
                    <p className="d-flex new-hover flex-column p-4 align-items-center">
                         <Laptop/>
                         <span>Electronics</span>
                    </p>
                    <p className="d-flex new-hover flex-column p-4 align-items-center">
                         <Modem/>
                         <span>Electronics</span>
                    </p>
                    <p className="d-flex new-hover flex-column p-4 align-items-center">
                         <Controller/>
                         <span>Electronics</span>
                    </p>
                    <p className="d-flex new-hover flex-column p-4 align-items-center">
                         <Cpu/>
                         <span>Electronics</span>
                    </p>
                    <p className="d-flex new-hover flex-column p-4 align-items-center">
                         <Dribbble/>
                         <span>Electronics</span>
                    </p>
                    <p className="d-flex new-hover flex-column p-4 align-items-center">
                         <Earbuds/>
                         <span>Electronics</span>
                    </p>
                    <p className="d-flex new-hover flex-column p-4 align-items-center">
                         <Tablet/>
                         <span>Electronics</span>
                    </p>
                
                </div>
            </div>
            {/* Trending Product */}
            <p className="container fs-4 d-flex justify-content-between">Trending Product's</p>
            <Card product={product}/>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-5">
                        <img src="image/side.png" className="img-fluid"/>
                    </div>
                    <div className="col-md-7">
                        <p className="fs-2 lead">Welcome To Our Shopping</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                             Assumenda corporis hic temporibus ut nisi fugiat numquam earum quaerat atque,
                             Assumenda corporis hic temporibus ut nisi fugiat numquam earum quaerat atque. <br/>
                                <br/>
                             Assumenda corporis hic temporibus ut nisi fugiat numquam earum quaerat atque,
                             Assumenda corporis hic temporibus ut nisi fugiat numquam earum quaerat atque.
                        </p>
                        <div class="d-flex gap-4">
                            <button class="btn btn-primary" type="button">Read More</button>
                            <button class="btn btn-outline-primary" type="button">Start Shopping</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Electronics Category */}
            <p className="container fs-4 d-flex justify-content-between">Electronics Category</p>
                <Card product={product}/>
            {/* Cloth Category */}
            <p className="container fs-4 d-flex justify-content-between">Cloth Category</p>
                <Card product={product}/>

            {/* Category Card with promotion */}
                <ProCard/>
            {/* Beauty Category */}
            <p className="container fs-4 d-flex justify-content-between">Beauty Category</p>
                <Card product={product}/>
            {/* Health Category */}
            <p className="container fs-4 d-flex justify-content-between">Health Category</p>
                <Card product={product}/>
            {/* Brand */}
            <p className="container fs-4 d-flex justify-content-between">Brands</p>
            <div className="container gap-4 d-flex justify-content-around  align-items-center mb-4">
                <img src="image/brand/adidas.png" width={90} height={75}/> 
                <img src="image/brand/nike.png" width={90} height={75}/> 
                <img src="image/brand/calvin.png" width={90} height={75}/>
                <img src="image/brand/boss.png" width={90} height={75}/> 
            </div>
            <Footer/>
        </div>
    )
}