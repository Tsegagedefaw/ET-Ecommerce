import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import {Cart4,PersonCircle } from 'react-bootstrap-icons'
  
export default function NavBar(){
    
    const categorylist=["All","Computer","Tv","Beauty","Electronics","Baby","Books","Home & Kitchen",
                        "Girl's Fashion","Men's Fashion","Health & Scientific","Art & Craft","Software",
                        "Toy & Games","Tools and Accessory"];
          categorylist.sort();
  

    return(
        <nav className="container mb-4 navbar navbar-fixed-top navbar-expand-md  navbar-light bg-white">            
                <a className="navbar-brand" href="#" >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KeqUSerPdC8rYNkRSnbhobf30NT5xMxmZA&usqp=CAU"
                    width={120} /></a>
                <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="row d-flex">
                    <div className="d-flex flex-row">   
                        <div className="collapse navbar-collapse d-fex mx-4  " id="navbarSupportedContent">
                        <form className="d-flex mx-4 w-75">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-muted" type="submit">  Search</button>
                        </form>
                        <ul className="navbar-nav mt-4 bg-none gap-4">
                        <li className="nav-item">
                        <Link  to={{pathname: '/createaccount'}} className="nav-link d-flex gap-2 " aria-current="page" href="#">
                                <PersonCircle size={30}/><p className="d-flex flex-column d-flex justify-item-center">
                                    <span className="fw-light" style={{fontSize:'10px'}}>Sign in</span>
                                    <span className="fw-light" style={{fontSize:'10px'}}>Account</span></p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-flex gap-2 " aria-current="page" href="#">
                                <Cart4 size={30}/><p className="d-flex flex-column d-flex justify-item-center">
                                    <span className="fw-" style={{fontSize:'10px'}}>My Cart</span>
                                    <span className="fw-ight" style={{fontSize:'10px'}}>$200/birr</span></p></a>
                        </li>     
                        </ul>
                        
                        </div>
                    </div>                   
                    <div className="collapse navbar-collapse d-flx mx-4 " id="navbarSupportedContent">
                        <ul className="navbar-nav mx-4 me-auto gap-4 mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {
                                    categorylist.map(category=><li><a className="dropdown-item" href="#">
                                        {category}</a></li>)
                                }
                               <li><a className="dropdown-item" href="#">Others</a></li>
                            </ul>
                        </li>
                            <li className="nav-item nav-item-our">
                                <a className="nav-link active d-flex gap-2" aria-current="page" 
                                     href="#">Home</a>
                            </li>                            
                            <li className="nav-item nav-item-our">
                                <a className="nav-link d-flex gap-2" aria-current="page" href="/shop">
                                 Shop</a>
                            </li>
                            <li className="nav-item nav-item-our">
                                <a className="nav-link d-flex gap-2" aria-current="page" href="#">
                                 Account</a>
                             </li>
                             <li className="nav-item nav-item-our">
                                <a className="nav-link d-flex gap-2" aria-current="page" href="#">
                                 Blog</a>
                             </li>
                            <li className="nav-item nav-item-our">
                                <a className="nav-link d-flex gap-2" aria-current="page" href="#">
                                 Register</a>
                            </li> 
                            <li className="nav-item nav-item-our">
                                <a className="nav-link d-flex gap-2" aria-current="page" href="#">
                                 Gifts</a>
                            </li>  
                            <li className="nav-item nav-item-our">
                                <a className="nav-link d-flex gap-2" aria-current="page" href="#">
                                 Contact</a>
                            </li>                
                        </ul>                                      
                    </div>
                </div>
        </nav> 
        // <div>
        //     {
        //         categorylist.map(name=><h1>{name}</h1>)
        //     }
        // </div>
    )
}