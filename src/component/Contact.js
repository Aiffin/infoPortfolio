import React from 'react'
//React fontawsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons'
import Footer from './Footer'

export default function Contact() {
  return (
    <section className='Contact mt-5'>
        <div className="container">
            <div className="row my-auto mb-5">
            
                <div className="col-12 col-md-4">
                    <div className="info mx-auto mt-5">
                        <div className="Email d-flex">
                            <div className="icon fs-4">
                            <FontAwesomeIcon icon={faEnvelope}/>
                            </div>
                            <div className="text ms-3">
                            <h3>Email</h3>
                            <p>aiffinsk@gmail.com</p>
                            </div>
                           
                        </div>
                        <div className="Phone d-flex">
                        <div className="icon fs-4">
                            <FontAwesomeIcon icon={faPhone}/>
                            </div>
                            <div className="text ms-3">
                            <h3>Phone</h3>
                            <p>+91-8970709301</p>
                            </div>
                        </div>
                        </div>
                    </div>

                <div className="col-md-7 ">
                <h1 className="display-4 mx-auto text-center align-items-center">Contact Us</h1>
              
                    <div className="card" id="contact-form">
                        <div className="card-body">
                        <div className="form-floating mb-3">
                        <input type="text" name="floaName" id="floatName" className="form-control" placeholder='Name' required />
                        <label htmlFor="floatName">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" name="floatEmail" id="floatEmail" className="form-control" placeholder='Email' required />
                        <label htmlFor="floatEmail">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea name="floatMessage" id="floatMessage" cols="30" rows="10" className='form-control' placeholder='Message' required></textarea>
                        <label htmlFor="floatMessage">Message</label>
                    </div>
                    <div className="form text-center">
                        <input type="submit" value="Submit" className="btn btn-primary " />
                    </div> 
                        </div>
                    </div>
                    
                   
                    
                </div>
            </div>
           
          
   
    {/* <footer class="footer mb-5 bg-dark"> */}
    
        {/* <div class="row text-center py-5">
            <div class="col">
                <p>Copy Right 2021-2022 All Rights Reserved</p>
            </div>
        </div> */}
 
    {/* </footer> */}
   

   
    </div>
    <hr />
    <Footer/>
        </section>

        
        
   
  )
}
