import React from "react"
import ReactDOM from "react-dom"
 
import About from "./About"
import Interests from "./Interests"


export default function Info() {
    return (
            <div className="info"> 
                <img src="Rectangle.png" alt= " "  className="myImg"/>  
            <h2>Yaakov Misao</h2>
            <h3>Yeshivat Hesdar </h3>
             <p> HiTech Bnei Menashe, Maalot </p>
            <div className="info-btn">
            <button className="btn-1"><img src="emailicon.png"/> Email</button>
            <button className="btn-2"> <img src="linkedin.png" background="#FFFFFF"/> Linkedlin</button>
            </div>
            <About/>
            <Interests/>
            </div>
        
            
       
    ) 
}
 
    
 