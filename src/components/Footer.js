import React, {useState} from 'react'
import resumePDF from "./resume.pdf"
import {SocialMediaIconsReact} from 'social-media-icons-react'
import DevIcon from 'devicon-react-svg'

function Footer(){
    const [linkedHover, setLinkedHover] = useState(false)
    const [mailHover, setMailHover] = useState(false)

    function handleLinkedEnter(){
        setLinkedHover(true)
    }
    
    function handleLinkedLeave(){
        setLinkedHover(false)
    }

    function handleMailEnter(){
        setMailHover(true)
    }
    
    function handleMailLeave(){
        setMailHover(false)
    }

    return(
        <div className="footer">
            <hr/>
            <a 
                className="resume" 
                href={resumePDF} 
                target='_blank' 
                rel="noopener noreferrer"
            >
                <div className="resume-container">
                    <b>View my Resume</b>
                </div>
            </a>
            <hr/>
            <div className="footer-icons">
                <div className="footer-contact-container">
                    <div 
                        className='linkedin-icon'
                        onMouseEnter={handleLinkedEnter}
                        onMouseLeave={handleLinkedLeave}
                    >
                        <SocialMediaIconsReact 
                            url='https://www.linkedin.com/in/evan-taylor-/'
                            icon='linkedin'
                            iconSize='5'
                            size='40px'
                            backgroundColor={linkedHover ? 'rgb(48, 118, 176)' : 'whitesmoke'}
                            iconColor='rgb(20, 20, 20)'
                        />
                    </div>
                    <a 
                        href="https://www.linkedin.com/in/evan-taylor-/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin-text"
                    >
                        linkedin.com/in/evan-taylor-/
                    </a>
                </div>
                <div className="footer-contact-container">
                    <a 
                        href='https://github.com/evantaylor7' 
                        target='_blank'
                        rel="noopener noreferrer"
                        title='github repo'
                    >
                        <DevIcon 
                            className='footer-github-icon' 
                            icon='github_badge' 
                        />
                    </a>
                    <a 
                        href="https://github.com/evantaylor7" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="github-text"
                    >
                        github.com/evantaylor7
                    </a>
                </div>
                <div className="footer-contact-container">
                    <div 
                        className='mail-icon'
                        onMouseEnter={handleMailEnter}
                        onMouseLeave={handleMailLeave}
                    >
                        <SocialMediaIconsReact 
                            url='mailto:evantaylor667@gmail.com'
                            icon='mail'
                            iconSize='5'
                            size='40px'
                            backgroundColor={mailHover ? 'rgb(189, 151, 102)' : 'whitesmoke'}
                            iconColor='rgb(20, 20, 20)'
                        />
                    </div>
                    <a 
                        href='mailto:evantaylor667@gmail.com' 
                        target='_blank' 
                        rel="noopener noreferrer"
                        className="mailto-text"
                    >
                        evantaylor667@gmail.com
                    </a>
                </div>
                <div className="footer-contact-container">
                    <a 
                        className="phone-icon"
                        href="tel:+14152501420"
                    >
                        &#9742;
                    </a>
                    <a 
                        className="phone-text"
                        href="tel:+14152501420"
                    >
                        415-250-1420
                    </a>
                </div>
            </div>
            <p className="signature">Evan Taylor – 2020</p>
        </div>
    )
}

export default Footer