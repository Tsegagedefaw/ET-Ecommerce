import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TopNav from "../Components/TopNav/topnav";
import NavBar from "../Components/NavBar/Navbar";
import Card from "../Components/card/card";
import Footer from "../Components/Footer/footer";

import { ordered,restocked } from "../Redux/product/productslice";

import {Modem,Laptop,Controller,Cpu,Dribbble,Earbuds,Tablet,Funnel } from 'react-bootstrap-icons'

import './home.css';

export default function Shop(){

    const dispatch = useDispatch()
    const numofproduct = useSelector((state)=> state.product.numberofproduct)

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
            
            {/* Redux Test */}
            <div>
                <h5>Number of product - {numofproduct}</h5>
                <button onClick={()=> dispatch(ordered())}>Number of product</button>
                <button onClick={()=> dispatch(restocked(5))}>Number of product</button>
            </div>
            <Footer/>
        </div>
    )
}