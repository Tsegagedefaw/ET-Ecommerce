import React from "react";
import {StarFill,HeartFill } from 'react-bootstrap-icons'
import './card.css'
export default function Card(props){
    // console.log(props.product[0].img);
    const product = props.product;
    return(
        
    <div className="container  scroll d-flex gap-4 mt-4 mb-4">
        <div className="card btn text-muted" style={{minWidth: "14rem",height:"20rem"}}>
            <img src="logo512.png" width={150} className="img-fluid mx-auto"/>
            <div className="card-body">
                <hr className="text-muted"/>
                <p className="card-text">Iphone 13 ProMax</p>
                <p className="card-text">$2000</p>
                <p className="card-text d-flex justify-content-between">
                    <span>
                        <StarFill color="gold"/><StarFill color="gold"/><StarFill color="gold"/><StarFill color="gold"/><StarFill color="gold"/>
                    </span>
                    <span>
                        <HeartFill size={20}/>
                    </span>
                </p>
            </div>
        </div>
        <div className="card btn text-muted" style={{minWidth: "14rem",height:"20rem"}}>
            <img src="logo512.png" width={150} className="img-fluid mx-auto"/>
            <div className="card-body">
                <hr className="text-muted"/>
                <p className="card-text">Iphone 13 ProMax</p>
                <p className="card-text">$2000</p>
                <p className="card-text d-flex justify-content-between">
                    <span>
                        <StarFill color="gold"/><StarFill color="gold"/><StarFill color="gold"/><StarFill color="gold"/><StarFill color="gold"/>
                    </span>
                    <span>
                        <HeartFill size={20}/>
                    </span>
                </p>
            </div>
        </div>
        <div className="card btn text-muted" style={{minWidth: "14rem",height:"20rem"}}>
            <img src="logo512.png" width={150} className="img-fluid mx-auto"/>
            <div className="card-body">
                <hr className="text-muted"/>
                <p className="card-text">Iphone 13 ProMax</p>
                <p className="card-text">$2000</p>
                <p className="card-text d-flex justify-content-between">
                    <span>
                        <StarFill color="gold"/><StarFill color="gold"/><StarFill color="gold"/><StarFill color="gold"/><StarFill color="gold"/>
                    </span>
                    <span>
                        <HeartFill size={20}/>
                    </span>
                </p>
            </div>
        </div>
        <div className="card btn text-muted" style={{minWidth: "14rem",height:"20rem"}}>
            <img src="logo512.png" width={150} className="img-fluid mx-auto"/>
            <div className="card-body">
                <hr className="text-muted"/>
                <p className="card-text">Iphone 13 ProMax</p>
                <p className="card-text">$2000</p>
                <p className="card-text d-flex justify-content-between">
                    <span>
                        <StarFill color="gold"/><StarFill color="gold"/><StarFill color="gold"/><StarFill color="gold"/><StarFill color="gold"/>
                    </span>
                    <span>
                        <HeartFill size={20}/>
                    </span>
                </p>
            </div>
        </div>
        <div className="card btn text-muted" style={{minWidth: "14rem",height:"20rem"}}>
            <img src="logo512.png" width={150} className="img-fluid mx-auto"/>
            <div className="card-body">
                <hr className="text-muted"/>
                <p className="card-text">Iphone 13 ProMax</p>
                <p className="card-text">$2000</p>
                <p className="card-text d-flex justify-content-between">
                    <span>
                        <StarFill color="gold"/><StarFill color="gold"/><StarFill color="gold"/><StarFill color="gold"/><StarFill color="gold"/>
                    </span>
                    <span>
                        <HeartFill size={20}/>
                    </span>
                </p>
            </div>
        </div>
        <div className="card btn text-muted" style={{minWidth: "14rem",height:"20rem"}}>
            <img src="logo512.png" width={150} className="img-fluid mx-auto"/>
            <div className="card-body">
                <hr className="text-muted"/>
                <p className="card-text">Iphone 13 ProMax</p>
                <p className="card-text">$2000</p>
                <p className="card-text d-flex justify-content-between">
                    <span>
                        <StarFill color="gold"/><StarFill color="gold"/><StarFill color="gold"/><StarFill color="gold"/><StarFill color="gold"/>
                    </span>
                    <span>
                        <HeartFill size={20}/>
                    </span>
                </p>
            </div>
        </div>
        <div className="d-flex align-items-center ">
            <a  href="#" className="text-decoration-none bg-secondary text-white px-4">SeeMore</a>
        </div>
        
    </div>
    )
}