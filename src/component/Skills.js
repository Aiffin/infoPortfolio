import React from "react";

export default function Skills(props){
    return(
        <section className="skills d-flex justify-content-around">
            <div className="container">
            <div className="row">
            <div className="col-md-12">
                    <div className="display-4 text-center mt-5 mb-3">Skills</div>
                </div></div>
                <div className="row g-3">
                    <div className="col-12 col-md-6 col-lg-6">
                        <div class="card text-center">
                            <div class="card-header">
                                Frontend
                            </div>
                            <div class="card-body">
                                <p class="card-text">HTML5,CSS3,JS,React,JQuery,Bootstrap</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <div class="card text-center">
                            <div class="card-header">
                                Backend
                            </div>
                            <div class="card-body">
                                <p class="card-text">Node-js,Express</p>
                            </div>
                        </div>
                    </div>
                </div>

                <br />

                <div className="row g-3">
                    <div className="col-12 col-md-6 col-lg-6">
                        <div class="card text-center">
                            <div class="card-header">
                                DataBase
                            </div>
                            <div class="card-body">
                                <p class="card-text">Mongodb,MySql</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6">
                        <div class="card text-center">
                        <div class="card-header">
                                Version Control
                            </div>
                            <div class="card-body">
                                <p class="card-text">Git,BitBucket</p>
                            </div>
                        </div>
                    </div>
                </div>
                   

                   
                          
            </div>
        </section>
    )
}

