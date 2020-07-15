import React from "react"
import Blogtopia from "./projects/Blogtopia.js"
import Photo from "./projects/Photo.js"
import Bookmark from "./projects/Bookmark.js"

function Page3(){
    return(
        <div className="page3" id="page3">
            <h1 className="projects">Projects</h1>
            <Blogtopia/>
            <Photo/>
            <Bookmark/>
        </div>
    )
}

export default Page3