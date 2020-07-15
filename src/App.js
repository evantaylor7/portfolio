import React from "react"
import Nav from "./components/Nav"
import Page1 from "./components/Page1"
import Page2 from "./components/Page2"
import Page3 from "./components/Page3"
import Footer from "./components/Footer.js"

function App() {
    return (
        <div>
            <Nav />
            <Page1 />
            <Page2 />
            <Page3 />
            <Footer />
        </div>
    )
}

export default App