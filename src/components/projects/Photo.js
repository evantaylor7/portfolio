import React from "react"
import DevIcon from 'devicon-react-svg'
import screenshot from "./screenshots/photo-sharing-screenshot.png"

function Photo(){
    return(
        <div className="project-alt">
            <div className="description-container-alt">
                <hr className="hr-top"/>
                <h2 className="project-title">Photo Sharing</h2>
                <p className="description-alt">This was a group project with <a className="link-name" href="https://github.com/kennysouvannaleut" target='_blank' rel="noopener noreferrer">Kenny Souvannaleut</a>. We created a photo sharing social media app, and aptly named it "Photo Sharing". This was my first big project using databases and collaborating through GitHub.<br/><br/><b>Languages/Frameworks</b>: MongoDB, Mongoose, Express, Node.js, React.<br/><b>External Resourses</b>: Firebase Storage Bucket.</p>
                <div className="links-container-alt">
                    <div className="gh-link-alt">
                        <a 
                            href="https://github.com/evantaylor7/group-project" 
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            <DevIcon 
                                className='mini-github-icon' 
                                icon='github_alt' 
                            />
                        </a>
                        <a 
                            href="https://github.com/evantaylor7/group-project" 
                            target='_blank'
                            rel="noopener noreferrer"
                            className="link"
                        >
                            GitHub Repository
                        </a>
                    </div>
                    <div>
                        <a 
                            href="https://photograph-share.herokuapp.com/" 
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
            <div className="img-container-alt">
                <a 
                    href="https://photograph-share.herokuapp.com/" 
                    target='_blank' 
                    rel="noopener noreferrer" 
                > 
                    <img className="screenshot-alt" alt='Photo Sharing Screenshot' src={screenshot}/>
                </a>
            </div>
        </div>
    )
}

export default Photo