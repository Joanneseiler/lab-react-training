import React from 'react'
import "../App.css"
import "./Greeting.css"


function Greetings({lang, children}) {

const greetingInDifferentLanguages = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour"
}

const greeting = () => {
    for (let key in greetingInDifferentLanguages) {
        if (key === lang) {
            console.log(greetingInDifferentLanguages[key])
            return greetingInDifferentLanguages[key]
        }
    }
}

        return (
            <div id="greeting" class="border-container">
                <p>{greeting()} {children}</p>
            </div>
        )
}



export default Greetings