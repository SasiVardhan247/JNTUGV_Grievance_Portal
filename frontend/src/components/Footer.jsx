import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer class="bd-footer py-4 py-md-5 mt-5 bg-white open-sans dark">
                <div class="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
                    <div class="row">
                        <div class="col-lg-4 mb-3">
                            <a class="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" href="/" aria-label="Bootstrap">
                                <span class="fs-5">Staff Grievance Redressal Portal</span>
                            </a>
                            <ul class="list-unstyled small">
                                <li class="mb-2">Designed and built with the help of <a href="https://github.com/SasiVardhan247/JNTUGV_Grievance_Portal/graphs/contributors">our contributors</a>.</li>
                                <li class="mb-2">Currently v1.0.0.</li>
                            </ul>
                        </div>
                        <div class="col-12 col-lg-3 offset-lg-1 mb-3">
                            <h5>Quick Links</h5>
                            <ul class="list-unstyled ">
                                <li class="mb-2"><a href="/">Home</a></li>
                                <li class="mb-2"><a href="/login">Registrar Login</a></li>
                                <li class="mb-2"><a href="/grievanceForm">Apply for Grievance</a></li>
                                <li class="mb-2"><a href="/checkstatus">Check status of your Grievance</a></li>
                            </ul>
                        </div>
                        <div class="col-12 col-lg-4 mb-3">
                            <h5>Guides</h5>
                            <ul class="list-unstyled">
                                <li className='mb-2'><a href="https://ucev.in/AdministrationMain/Registrar">About Registrar</a></li>
                                <li className="mb-2"><a href="https://akriviahcm.com/hr-glossary/grievance-redressal/" >More about Grievance Regressal</a></li>
                                <li className='mb-2'><a href="/faqs">FAQs</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='container d-flex flex-column justify-content-center align-items-center'>
                    <small>© Copyright 2023 JNTU-GV Vizianagaram. All Rights Reserved.</small>
                </div>
            </footer>
        </div>
    )
}

export default Footer