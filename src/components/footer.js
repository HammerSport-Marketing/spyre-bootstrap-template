import React from "react"

const logo_small = require('../dist/img/logo-small.svg');
const bgImg = "../dist/img/footer-bg.jpg";

const Footer = () => (
    <footer className="footer text-white" style={{backgroundImage: "url("+bgImg+")"}}>
    <div className="container d-flex h-100">
        <div className="row flex-grow-1">
            <div className="col-lg-3 pt-3 ext-l bg-secondary text-center text-lg-left">
                <div className="d-flex flex-column h-100">
                    <div className="pt-5 pt-lg-8 pb-4">
                        <img src={logo_small} alt="" width="92" className="mb-4" />
                        <p className="mb-4 mt-3 fs--1">New York, NY<br />
                        62 Birchpond St.<br />
                        Crystal Lake, NY 11762</p>

                        <p className="fs--1"><a href="#" className="text-white"><i className="zmdi zmdi-phone zmdi-hc-fw mr-1"></i>+1-202-555-0149</a><br />
                        <a href="#" className="text-white"><i className="zmdi zmdi-email zmdi-hc-fw mr-1"></i>info@spyre.com</a></p>
                    </div>

                    <ul className="mt-4 mt-lg-auto mb-5 mb-lg-0 list-unstyled list-inline">
                        <li className="mr-3 list-inline-item">
                            <a href="#" target="_blank">
                                <i className="zmdi zmdi-twitter text-white"></i>
                            </a>
                        </li>
                        <li className="mr-3 list-inline-item">
                            <a href="#" target="_blank">
                                <i className="zmdi zmdi-instagram text-white"></i>
                            </a>
                        </li>
                        <li className="mr-3 list-inline-item">
                            <a href="#" target="_blank">
                                <i className="zmdi zmdi-facebook-box text-white"></i>
                            </a>
                        </li>
                        <li className="mr-3 list-inline-item">
                            <a href="#" target="_blank">
                                <i className="zmdi zmdi-pinterest text-white"></i>
                            </a>
                        </li>
                        <li className="mr-3 list-inline-item">
                            <a href="#" target="_blank">
                                <i className="zmdi zmdi-flickr text-white"></i>
                            </a>
                        </li>
                        <li className="mr-3 list-inline-item">
                            <a href="#" target="_blank">
                                <i className="zmdi zmdi-youtube text-white"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="col d-flex flex-column mb-2 mt-3 pl-lg-7">
                <div className="row pt-5 pt-lg-8 pb-4 pb-lg-6">
                    <div className="col-6 col-lg-3">
                        <h6 className="mb-1 mb-lg-4 text-uppercase">Services</h6>
                        <ul className="pt-2 mb-5 fw-light list-unstyled">
                            <li className="my-1"><a href="#" className="text-white">Design</a></li>
                            <li className="my-1"><a href="#" className="text-white">Development</a></li>
                            <li className="my-1"><a href="#" className="text-white">Themes</a></li>
                            <li className="my-1"><a href="#" className="text-white">CMS</a></li>
                            <li className="my-1"><a href="#" className="text-white">Mobile</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-3">
                        <h6 className="mb-1 mb-lg-4 text-uppercase">About</h6>
                        <ul className="pt-2 mb-5 fw-light list-unstyled">
                            <li className="my-1"><a href="#" className="text-white">About Us</a></li>
                            <li className="my-1"><a href="#" className="text-white">Contact</a></li>
                            <li className="my-1"><a href="#" className="text-white">The team</a></li>
                            <li className="my-1"><a href="#" className="text-white">Careers</a></li>
                            <li className="my-1"><a href="#" className="text-white">Locate store</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-3">
                        <h6 className="mb-1 mb-lg-4 text-uppercase">Help</h6>
                        <ul className="pt-2 mb-5 fw-light list-unstyled">
                            <li className="my-1"><a href="#" className="text-white">Sponsors</a></li>
                            <li className="my-1"><a href="#" className="text-white">FAQs</a></li>
                            <li className="my-1"><a href="#" className="text-white">Stories & Ideas</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-auto d-flex justify-content-between">
                    <span className="fs--3 fs-lg--2">&copy; Spyre, 2019 Webinning Ltd.</span>
                    <div className="fs--3 fs-lg--2"><a href="#" className="mr-1 text-white">Privacy Policy</a>|<a href="#" className="ml-1 text-white">Cookie Policy</a></div>
                </div>
            </div>
        </div>
    </div>
</footer>
)
 
export default Footer
