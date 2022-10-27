import React from "react";
import {Headset } from 'react-bootstrap-icons'

import './topnav.css'

export default function TopNav(){
    return(
        <div className="container-fluid nav-bg text-white">
            <div className="d-flex justify-content-around">
                <p><Headset color="#ff0808c9"/> support +251-925-962-271</p>
                <p>Free Shipping For Order Over $200</p>
                <div className="d-flex flex-row gap-4">
                    <p className="d-flex">Order Tracking </p>
                        <a className="dropdown-toggle text-decoration-none text-white" data-bs-toggle="dropdown" aria-expanded="false">
                            Eng/$
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Menu item</a></li>
                            <li><a className="dropdown-item" href="#">Menu item</a></li>
                            <li><a className="dropdown-item" href="#">Menu item</a></li>
                        </ul>
                </div>
            </div>
        </div>
    )
}