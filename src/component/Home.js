import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub,
    faStackOverflow
    } from '@fortawesome/free-brands-svg-icons'

import MyPdf from "../../src/assets/file/Aiffinara.pdf"

function Home(props){
    return(
        <section className="landing vh-100 d-flex align-items-center">
            <div className="container">
            <div className="row">
                <div className="col-lg-12 mx-auto text-center">
                    <h1 className="display-1">Hi I'am <span className="text-box">Aiffinara</span></h1>
                    <h2>A Software developer with a passion for learning and creating</h2>
                    <a href={MyPdf} className="btn btn-primary" download="Aiffin_resume.pdf">Download CV</a>
                    <div className="social-link d-flex justify-content-center">
                        <div className="linked mx-3 my-3 center">
                        <a href=" https://www.linkedin.com/in/aiffinara-baig-ab8a37a1/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2xl" /></a>
                        </div>
                        <div className="git mx-3 my-3">
                        <a href="https://github.com/Aiffin" target="_blank"><FontAwesomeIcon icon={faGithub} size="2xl" /></a>
                        
                        </div>
                        <div className="stack mx-3 my-3">
                        <a href="https://stackoverflow.com/users/7539689/aiffin" target="_blank"><FontAwesomeIcon icon={faStackOverflow} size="2xl" /> </a>
                        </div>
                    </div>  
                </div>
            </div>
            </div>
        </section>
        // <h1>he</h1>
    )
}

export default Home