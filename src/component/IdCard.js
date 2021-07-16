import React from "react"
import './IdCard.css';
import '../App.css';

function IdCard(props){
   
    return (
        <div id="id-card" class="border-container">
            <div>
                <img src={props.picture} alt="face"></img>
            </div>
            <div>
                <p><span className="property-key">First name:</span> {props.firstName} </p>
                <p><span className="property-key">Last name:</span> {props.lastName}</p>
                <p><span className="property-key">Gender:</span> {props.gender}</p>
                <p><span className="property-key">Height:</span> {props.height} m</p>
                <p><span className="property-key">Birth:</span> {props.birth.toDateString()}</p>
            </div>
        </div>
       
    )
}

export default IdCard