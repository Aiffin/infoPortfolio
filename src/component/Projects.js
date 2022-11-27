import React from 'react'

function Projects() {
  return (
    <section className="project">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="display-4 text-center mt-5 mb-3">Projects</div>
                </div>
            </div>
            <div className="row g-3">
                <div className="col-12 col-md-4 col-lg-4">
                    <div className="card h-100 d-flex flex-column">
                        <div className="card-header text-center">
                           <b>Task Manager</b> 
                        </div>
                        <div className="card-body">
                            Task Manager : (Content Management System) <br />
                            Frontend:HTML5,CSS3,Bootstrap-5,React <br />
                            Backend:Node.js,Express,Mongodb <br />

                        </div>
                        <div className="card-footer text-center">
                            <a href='https://cmsrestapi.herokuapp.com/' target="_blank" rel="noopener noreferrer" className="btn btn-primary shadow">view</a>

                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 ">
                    <div className="card h-100 d-flex flex-column">
                        <div className="card-header text-center">
                              <b>Mobile Website</b> 
                        </div>
                        <div className="card-body">
                            
                            Progress Mobile website <br />
                            HTML5,CSS3,JS,Bootstrap-5 <br />
                        </div>
                        <div className="card-footer text-center">
                             <a href='https://progress-mob-website.netlify.app' target="_blank" rel="noopener noreferrer" className="btn btn-primary">view</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4 ">
                    <div className="card h-100 d-flex flex-column">
                        <div className="card-header">
                            Task Manager
                        </div>
                        <div className="card-body">
                        </div>
                        <div className="card-footer text-center">
                        <button to={'/'} className="btn btn-primary shadow">view</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects