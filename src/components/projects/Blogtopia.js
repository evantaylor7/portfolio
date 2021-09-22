import React from "react"
import DevIcon from 'devicon-react-svg'
import screenshot from "./screenshots/blogtopia-screenshot.png"

function Blogtopia(){
    return(
        <div className="project">
            <div className="description-container">
                <hr className="hr-top"/>
                <h2 className="project-title">Blogtopia</h2>
                <p className="description">This was my final project at V School, a blog publishing website. I have to say, it was very satisfying seeing it come together. A user can create a login, customize a blog landing page, choose a url endpoint for their blog address, and make blog posts.<br/><br/><b>Languages/Frameworks</b>: MongoDB, Mongoose, Express, Node.js, React, Styled Components for CSS.<br/><b>External Resources</b>: Unsplash API, TinyMCE API, AWS S3 storage bucket.</p>
                <div className="links-container">
                    <div className="gh-link">
                        <a 
                            href="https://github.com/evantaylor7/personal-fullstack" 
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            <DevIcon 
                                className='mini-github-icon' 
                                icon='github_alt' 
                            />
                        </a>
                        <a 
                            href="https://github.com/evantaylor7/personal-fullstack" 
                            target='_blank'
                            rel="noopener noreferrer"
                            className="link"
                        >
                            GitHub Repository
                        </a>
                    </div>
                    <div>
                        <a 
                            href="https://blogtopia.herokuapp.com/" 
                            target='_blank' 
                            rel="noopener noreferrer" 
                            className="link"
                        > 
                            Launch App
                        </a>
                    </div>
                </div>
                <hr className="hr-bottom"/>
            </div>
            <div className='img-container'>
                <a 
                    href="https://blogtopia.herokuapp.com/" 
                    target='_blank' 
                    rel="noopener noreferrer" 
                > 
                    <img className="screenshot" alt='Blogtopia Screenshot' src={screenshot}/>
                </a>
            </div>
        </div>
    )
}

export default Blogtopia