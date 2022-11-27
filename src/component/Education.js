import React from "react";

//React fontawsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGraduationCap} from '@fortawesome/free-solid-svg-icons'
import {faBriefcase} from '@fortawesome/free-solid-svg-icons'

export default function Education() {
  return (
    <section>
        <div className="container">
            <div className="row shadow my-4 p-2 bg-white rounded-lg">
            <div className="col-md-6">
                <div className="py-2">
                    <h5>Education</h5>
                </div>
                <div className="timeline">
                <div className="timeline-box">
                        <div className="timeline-icon">
                        <FontAwesomeIcon icon={faGraduationCap} style={{color:"#fff"}}/>
                        </div>
                        <div className="timeline-content">
                            <h4>BE (Computer Science)</h4>
                            <hr className="b-info" />
                            <p>KLS Gogte Institution of Technology,Belgaum Karnataka </p>
                            <p className="text-info">2013-2016</p>
                        </div>
                    </div>
                    

                    <div className="timeline-box">
                        <div className="timeline-icon">
                        <FontAwesomeIcon icon={faGraduationCap} style={{color:"#fff"}}/>
                        </div>
                        <div className="timeline-content">
                            <h4>Diploma (Computer Science)</h4>
                            <hr className="b-info" />
                            <p>R.N Shetty Polytechnic College,Belgaum Karnataka</p>
                            <p className="text-info">2010-2013</p>
                        </div>
                    </div>

                    <div className="timeline-box">
                        <div className="timeline-icon">
                        <FontAwesomeIcon icon={faGraduationCap} style={{color:"#fff"}}/>
                        </div>
                        <div className="timeline-content">
                            <h4>S.S.L.C</h4>
                            <hr className="b-info" />
                            <p>Shermen English Medium high School,Belgaum Karnataka</p>
                            <p className="text-info">2000-2010</p>
                        </div>
                    </div>
                </div>
                </div>

                <div className="col-md-6">
                <div className="py-2">
                    <h5>Experience</h5>
                </div>
                <div className="timeline">
                    <div className="timeline-box">
                        <div className="timeline-icon">
                        <FontAwesomeIcon icon={faBriefcase} style={{color:"#fff"}}/>
                        </div>
                        <div className="timeline-content">
                            <h4>Bitjini</h4>
                            <hr className="b-info" />
                            <p>Web Developer</p>
                            <ul>
                                <li>Created the Responsive web design and browser Compatibiliy Testing</li>
                                <li>Worked on Bitjini website and the Admin panel of Beautiful Photos,Corro App,Vanisha Honda</li>
                                <li>Hositing on Heroku</li>
                            </ul>
                            
                            <p className="text-info">2016-2017</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}
