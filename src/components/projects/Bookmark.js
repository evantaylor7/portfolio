import React from "react"
import DevIcon from 'devicon-react-svg'
import screenshot from "./screenshots/bookmark-screenshot.png"

function Bookmark(){
    return(
        <div className="project">
            <div className="description-container">
                <hr className="hr-top"/>
                <h2 className="project-title">BookMark</h2>
                <p className="description">This project was built in React and used the Google Books API, allowing a user to search for books and save them in separate lists. It uses React router, context, and hooks, and axios to handle API calls and responses.<br/><br/><b>Languages/Frameworks</b>: React, CSS.<br/><b>External Resources</b>: Google Books API.</p>
                <div className="links-container">
                    <div className="gh-link">
                        <a 
                            href="https://github.com/evantaylor7/personal-react-site" 
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            <DevIcon 
                                className='mini-github-icon' 
                                icon='github_alt' 
                            />
                        </a>
                        <a 
                            href="https://github.com/evantaylor7/personal-react-site" 
                            target='_blank'
                            rel="noopener noreferrer"
                            className="link"
                        >
                            GitHub Repository
                        </a>
                    </div>
                    <div>
                        <a 
                            href="http://bookmark-books.surge.sh/" 
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
                    href="http://bookmark-books.surge.sh/" 
                    target='_blank' 
                    rel="noopener noreferrer" 
                > 
                    <img className="screenshot" alt='Bookmark Screenshot' src={screenshot}/>
                </a>
            </div>
        </div>
    )
}

export default Bookmark