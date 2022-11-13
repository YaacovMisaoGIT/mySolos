import React from "react"
import ReactDOM from "react-dom"
import Info from "./Info"
import Footer from "./Footer"
 

function App() {
    return (
        <div>
            <Info />
            <Footer/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))