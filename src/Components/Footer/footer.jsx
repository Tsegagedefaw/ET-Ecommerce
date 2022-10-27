import React from "react";
import {StarFill,HeartFill,Facebook,Google,Twitter } from 'react-bootstrap-icons'
import './footer.css'
export default function Footer(){

    return(
        
    <div className="container border shadow-sm d-flex flex-column mb-4">
       <div className="row gap-2 mt-4">
        <div className="col d-flex flex-column align-items-center">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KeqUSerPdC8rYNkRSnbhobf30NT5xMxmZA&usqp=CAU"
                 width={120}/>
        <p>ETH-ME</p>
        </div>
       <div className="col">
            <ui className="text-decoration-none">
                <li className="" style={{listStyleType:'none'}}>Aboujkhkjhkhlkjlkt</li>
                <li className="" style={{listStyleType:'none'}}>About</li>
                <li className="" style={{listStyleType:'none'}}>About</li>
                <li className="" style={{listStyleType:'none'}}>About</li>
            </ui>
       </div>
       <div className="col">
       <ui className="text-decoration-none">
                <li className="" style={{listStyleType:'none'}}>Abokjlkjlkjlkjut</li>
                <li className="" style={{listStyleType:'none'}}>Abouihlkjlkjlkjlkt</li>
                <li className="" style={{listStyleType:'none'}}>Aboulkjlkt</li>
                <li className="" style={{listStyleType:'none'}}>About</li>
            </ui>
        </div>
       <div className="col d-flex flex-column justify-content-center align-items-center">
          <p>Contact</p>
          <div className="d-flex gap-2 ">
            <Google/> <Facebook/> <Twitter/>
          </div>
          
       </div>
       </div>
    </div>
    )
}