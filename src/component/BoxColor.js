import React from "react"
import "../App.css"
import "./BoxColor.css"


function BoxColor(props){
    return (
        <div id="color-box" class="border-container" style={{backgroundColor: `rgb(${props.r},${props.g},${props.b})`}}>
            <p>rgb({props.r},{props.g},{props.b})</p>
        </div>
    )
}

export default BoxColor