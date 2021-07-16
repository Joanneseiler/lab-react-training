import React from "react"
import "./Random.css"
import "../App.css"


function Random(props){

    return (
        <div id="random" class="border-container">
            <p>Random value between {props.min} and {props.max} ➡️ {Math.floor(Math.random() * (props.max - props.min) + props.min)}  </p>
        </div>
    )
}

export default Random