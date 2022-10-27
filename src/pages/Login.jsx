import React from "react";

import { Facebook,Google,Twitter } from "react-bootstrap-icons";

import './home.css';


export default function LogIn(){


    return(
        <div className="container shadow mt-4 text-muted">
            <div className="row d-flex">
                <div className="col-6 d-flex justify-content-center align-items-center">
                    <img src="image/side.png" width={550} style={{ borderRight:'1px solid lightgray' }} 
                    className="img-fluid "/>
                </div>
                <div className="col-6">
                    <p className="fs-3 lead fw-bold text-center">Log In</p>
                    <form action="/">
                    <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                            <label for="email">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="password" placeholder="Your Password"/>
                            <label for="password">Password</label>
                    </div>
                    <p>Create Account <a href="/createaccount" className="text-decoration-none">Sign Up</a></p>
                    <input type="submit" className="btn btn-secondary d-grid gap-2 mx-auto mb-4"/>
                    </form>
                    <p className="fs-3 lead fw-bold text-center">or</p>
                    <div className="d-flex flex-column align-items-center">
                        <div className="border py-1 mb-3 rounded-pill" style={{paddingLeft:60,paddingRight:60}}>
                            <Facebook className="" size={30}/>
                        </div>
                        <div className="border py-1 mb-3 rounded-pill" style={{paddingLeft:60,paddingRight:60}}>
                            <Google className="" size={30}/>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}