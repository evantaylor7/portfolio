import React from "react"
import Blogtopia from "./projects/Blogtopia.js"
import Photo from "./projects/Photo.js"
import Bookmark from "./projects/Bookmark.js"
import resumePDF from "./resume.pdf"

function Page3(){
    return(
        <div className="page3" id="page3">
            <h1 className="projects">Projects:</h1>
            <Blogtopia/>
            <Photo/>
            <Bookmark/>
            <hr/>
            <div className="resume-container">
                <a 
                    className="resume" 
                    href={resumePDF} 
                    target='_blank' 
                    rel="noopener noreferrer"
                >
                    <b>View my Resume</b>
                </a>
            </div>
            <hr/>
        </div>
    )
}

export default Page3