import React from 'react'
import logo from '../assets/img/img2.png'

export default function About() {
  return (
    <section className="About">
        <div className="container">
            <div className="row">
                <div className="col-sm-6 mt-5">
                  <img src={logo} alt="" className='img-thumbnail border-0 about-img' />
                </div>
                 <div className="col-md-6 mx-auto mt-5">
                  <div className="about-me ">
                  <div className="display-4">WHO AM I?</div>
                  <p>
                 My name is AIFFINARA .I Completed my degree in the stream of COMPUTER SCIENCE.I have an experience in web development.</p><br />
                 <p>I love exploring new technologies and enthusiasm of creating the website.</p>
                 </div>
                </div>
                </div>
            </div>
       
    </section>
  
  )
}
