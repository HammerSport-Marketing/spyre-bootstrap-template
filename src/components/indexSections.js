import React from "react"

const bg15 = require('../dist/img/backgrounds/bg-15.jpg');

export const SectionA = () => (
<section className="py-0 overflow-hidden text-center">
    <div className="bg-container overlay overlay-60 parallax" data-rellax-percentage="0.5" style={{backgroundImage: "url("+bg15+")"}}></div>
    <div className="container">
        <div className="row h-100vh justify-content-center align-items-center">
            <div className="col-lg-8">
                <h1 className="text-white text-uppercase fs-5 fs-lg-7" data-aos="fade-down" data-aos-duration="1000">Spyre</h1>
                <p className="mb-5 fs-lg-1 text-white" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000">Slick contemporary multipurpose theme</p>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <a href="#section-4" className="btn btn-primary mx-2 px-5 mb-3" data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000" data-smooth-scroll data-smooth-scroll-hash="false">Explore Demos</a>
                    </div>
                    <div className="col-auto">
                        <a href="https://themes.getbootstrap.com/product/spyre-slick-contemporary-multipurpose-theme/" target="_blank" className="btn btn-light px-5 mx-2" data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000">Purchase Now<i className="zmdi zmdi-long-arrow-right ml-2"></i></a>
                    </div>
                </div>
            </div>

            <div className="move d-none d-lg-block">
                <a href="#section-2" className="text-white" data-smooth-scroll data-smooth-scroll-hash="false">
                    <i className="zmdi zmdi-long-arrow-down zmdi-hc-2x"></i>
                </a>
            </div>
        </div>
    </div>
</section>
)

export const SectionB = () => (
<section id="section-2">
    <div className="container text-center">
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <h3 className="my-0 fs-1 fw-medium text-primary text-uppercase">Check out</h3>
                <h2 className="mb-5 fw-medium text-secondary text-uppercase">Main Features</h2>
                <p>Spyre is a fully responsive contemporary theme that offers maximum flexibility in the creation of visually engaging and highly legible page layouts.</p>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-10">
                <div className="row justify-content-center text-center mt-6">
                    <div className="col-6 col-md-4 col-lg-3 mb-5 mb-md-6 px-4 px-lg-5">
                        <div className="mb-3 p-1 d-flex square rounded-circle bg-blue-light" data-aos="flip-right" data-aos-duration="1000">
                            <i className="fas fa-mobile-alt fs-2 fs-md-3 fs-xl-4 d-flex align-self-center mx-auto text-secondary"></i>
                        </div>
                        <h6 className="text-uppercase" data-aos="zoom-in" data-aos-duration="1000">Fully Responsive</h6>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 mb-5 mb-md-6 px-4 px-lg-5">
                        <div className="mb-3 p-1 d-flex square rounded-circle bg-blue-light" data-aos="flip-right" data-aos-delay="50" data-aos-duration="1000">
                            <i className="fab fa-twitter fs-2 fs-md-3 fs-xl-4 d-flex align-self-center mx-auto text-secondary"></i>
                        </div>
                        <h6 className="text-uppercase" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000">Latest Bootstrap</h6>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 mb-5 mb-md-6 px-4 px-lg-5">
                        <div className="mb-3 p-1 d-flex square rounded-circle bg-blue-light" data-aos="flip-right" data-aos-delay="100" data-aos-duration="1000">
                            <i className="fas fa-layer-group fs-2 fs-md-3 fs-xl-4 d-flex align-self-center mx-auto text-secondary"></i>
                        </div>
                        <h6 className="text-uppercase" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">100% Customizable</h6>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 mb-5 mb-md-6 px-4 px-lg-5">
                        <div className="mb-3 p-1 d-flex square rounded-circle bg-blue-light" data-aos="flip-right" data-aos-delay="150" data-aos-duration="1000">
                            <i className="fab fa-sass fs-2 fs-md-3 fs-xl-4 d-flex align-self-center mx-auto text-secondary"></i>
                        </div>
                        <h6 className="text-uppercase" data-aos="zoom-in" data-aos-delay="150" data-aos-duration="1000">Built with Sass</h6>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 mb-5 mb-md-0 px-4 px-lg-5">
                        <div className="mb-3 p-1 d-flex square rounded-circle bg-blue-light" data-aos="flip-right" data-aos-delay="200" data-aos-duration="1000">
                            <i className="fab fa-css3 fs-2 fs-md-3 fs-xl-4 d-flex align-self-center mx-auto text-secondary"></i>
                        </div>
                        <h6 className="text-uppercase" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">Interactive Animations</h6>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 mb-5 mb-md-0 px-4 px-lg-5">
                        <div className="mb-3 p-1 d-flex square rounded-circle bg-blue-light" data-aos="flip-right" data-aos-delay="250" data-aos-duration="1000">
                            <i className="fas fa-code fs-2 fs-md-3 fs-xl-4 d-flex align-self-center mx-auto text-secondary"></i>
                        </div>
                        <h6 className="text-uppercase" data-aos="zoom-in" data-aos-delay="250" data-aos-duration="1000">Powerful Scripts</h6>
                    </div>

                    <div className="col-6 col-md-4 col-lg-3 mb-0 px-4 px-lg-5">
                        <div className="mb-3 p-1 d-flex square rounded-circle bg-blue-light" data-aos="flip-right" data-aos-delay="300" data-aos-duration="1000">
                            <i className="far fa-clone fs-2 fs-md-3 fs-xl-4 d-flex align-self-center mx-auto text-secondary"></i>
                        </div>
                        <h6 className="text-uppercase" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000">Cross Browser</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
)

export const SectionC = () => (
<section className="py-6 py-lg-8 bg-primary text-white">
    <div className="container">
        <div className="row align-items-center text-center">
            <div className="col">
                <h2 className="mb-5">Start building beautiful websites with Spyre</h2>
                <a href="https://themes.getbootstrap.com/product/spyre-slick-contemporary-multipurpose-theme/" target="_blank" className="btn bg-white text-primary mb-4 px-4">Purchase Now<i className="zmdi zmdi-shopping-car ml-2"></i></a>
                <p className="mb-0">Available exclusively at Bootstrap Themes</p>
            </div>
        </div>
    </div>
</section>
)

const img = require('../dist/img/printscreens/homepage.jpg');

export const SectionD = () => (
    <section id="section-4" className="text-center">
        <div className="container">
            <h3 className="my-0 fs-1 fw-medium text-primary text-uppercase">Explore</h3>
            <h2 className="mb-5 fw-medium text-secondary text-uppercase">Demo Pages</h2>
            
            <div className="row justify-content-center">
                <div className="col-lg-6 mb-4 mb-lg-6" data-aos="fade-up" data-aos-duration="1000">
                    <a href="#" className="mb-3 d-block position-relative">
                        <div className="position-absolute d-flex justify-content-center align-items-center w-100 h-100 bg-secondary rounded text-white">
                            <i className="fas fa-link fa-2x"></i>
                        </div>
                        <img src={img} alt="" className="position-relative img-fluid w-100 shadow-lg rounded opacity-1-hover" />
                    </a>
                    <h4><a href="#" className="text-body">Homepage</a></h4>
                </div>
                <div className="col-lg-6 mb-4 mb-lg-6" data-aos="fade-up" data-aos-duration="1000">
                    <a href="#" className="mb-3 d-block position-relative">
                        <div className="position-absolute d-flex justify-content-center align-items-center w-100 h-100 bg-secondary rounded text-white">
                            <i className="fas fa-link fa-2x"></i>
                        </div>
                        <img src="../assets/img/printscreens/services.jpg" alt="" className="position-relative img-fluid w-100 shadow-lg rounded opacity-1-hover" />
                    </a>
                    <h4><a href="#" className="text-body">Services</a></h4>
                </div>
                <div className="col-lg-6 mb-4 mb-lg-6" data-aos="fade-up" data-aos-duration="1000">
                    <a href="#" className="mb-3 d-block position-relative">
                        <div className="position-absolute d-flex justify-content-center align-items-center w-100 h-100 bg-secondary rounded text-white">
                            <i className="fas fa-link fa-2x"></i>
                        </div>
                        <img src="../assets/img/printscreens/blog.jpg" alt="" className="position-relative img-fluid w-100 shadow-lg rounded opacity-1-hover" />
                    </a>
                    <h4><a href="#" className="text-body">Blog</a></h4>
                </div>
                <div className="col-lg-6 mb-4 mb-lg-6" data-aos="fade-up" data-aos-duration="1000">
                    <a href="#" className="mb-3 d-block position-relative">
                        <div className="position-absolute d-flex justify-content-center align-items-center w-100 h-100 bg-secondary rounded text-white">
                            <i className="fas fa-link fa-2x"></i>
                        </div>
                        <img src="../assets/img/printscreens/blog-single.jpg" alt="" className="position-relative img-fluid w-100 shadow-lg rounded opacity-1-hover" />
                    </a>
                    <h4><a href="#" className="text-body">Blog Single</a></h4>
                </div>
                <div className="col-lg-6 mb-4 mb-lg-6" data-aos="fade-up" data-aos-duration="1000">
                    <a href="#" className="mb-3 d-block position-relative">
                        <div className="position-absolute d-flex justify-content-center align-items-center w-100 h-100 bg-secondary rounded text-white">
                            <i className="fas fa-link fa-2x"></i>
                        </div>
                        <img src="../assets/img/printscreens/portfolio.jpg" alt="" className="position-relative img-fluid w-100 shadow-lg rounded opacity-1-hover" />
                    </a>
                    <h4><a href="#" className="text-body">Portfolio</a></h4>
                </div>
                <div className="col-lg-6 mb-4 mb-lg-6" data-aos="fade-up" data-aos-duration="1000">
                    <a href="#" className="mb-3 d-block position-relative">
                        <div className="position-absolute d-flex justify-content-center align-items-center w-100 h-100 bg-secondary rounded text-white">
                            <i className="fas fa-link fa-2x"></i>
                        </div>
                        <img src="../assets/img/printscreens/about.jpg" alt="" className="position-relative img-fluid w-100 shadow-lg rounded opacity-1-hover" />
                    </a>
                    <h4><a href="#" className="text-body">About</a></h4>
                </div>
                <div className="col-lg-6 mb-4 mb-lg-6" data-aos="fade-up" data-aos-duration="1000">
                    <a href="../pages/contact.html" className="mb-3 d-block position-relative">
                        <div className="position-absolute d-flex justify-content-center align-items-center w-100 h-100 bg-secondary rounded text-white">
                            <i className="fas fa-link fa-2x"></i>
                        </div>
                        <img src="../assets/img/printscreens/contact.jpg" alt="" className="position-relative img-fluid w-100 shadow-lg rounded opacity-1-hover" />
                    </a>
                    <h4><a href="#" className="text-body">Contact</a></h4>
                </div>
                <div className="col-lg-6 mb-4 mb-lg-6" data-aos="fade-up" data-aos-duration="1000">
                    <a href="#" className="mb-3 d-block position-relative">
                        <div className="position-absolute d-flex justify-content-center align-items-center w-100 h-100 bg-secondary rounded text-white">
                            <i className="fas fa-link fa-2x"></i>
                        </div>
                        <img src="../assets/img/printscreens/team.jpg" alt="" className="position-relative img-fluid w-100 shadow-lg rounded opacity-1-hover" />
                    </a>
                    <h4><a href="#" className="text-body">Team</a></h4>
                </div>
                <div className="col-lg-6 mb-4 mb-lg-6" data-aos="fade-up" data-aos-duration="1000">
                    <a href="#" className="mb-3 d-block position-relative">
                        <div className="position-absolute d-flex justify-content-center align-items-center w-100 h-100 bg-secondary rounded text-white">
                            <i className="fas fa-link fa-2x"></i>
                        </div>
                        <img src="../assets/img/printscreens/faq.jpg" alt="" className="position-relative img-fluid w-100 shadow-lg rounded opacity-1-hover" />
                    </a>
                    <h4><a href="#" className="text-body">Faq</a></h4>
                </div>
                <div className="col-lg-6 mb-4 mb-lg-6" data-aos="fade-up" data-aos-duration="1000">
                    <a href="#" className="mb-3 d-block position-relative">
                        <div className="position-absolute d-flex justify-content-center align-items-center w-100 h-100 bg-secondary rounded text-white">
                            <i className="fas fa-link fa-2x"></i>
                        </div>
                        <img src="../assets/img/printscreens/pricing.jpg" alt="" className="position-relative img-fluid w-100 shadow-lg rounded opacity-1-hover" />
                    </a>
                    <h4><a href="#" className="text-body">Pricing</a></h4>
                </div>
                <div className="col-lg-6 mb-4 mb-lg-6" data-aos="fade-up" data-aos-duration="1000">
                    <a href="#" className="mb-3 d-block position-relative">
                        <div className="position-absolute d-flex justify-content-center align-items-center w-100 h-100 bg-secondary rounded text-white">
                            <i className="fas fa-link fa-2x"></i>
                        </div>
                        <img src="../assets/img/printscreens/careers.jpg" alt="" className="position-relative img-fluid w-100 shadow-lg rounded opacity-1-hover" />
                    </a>
                    <h4><a href="#" className="text-body">Careers</a></h4>
                </div>
                <div className="col-lg-6 mb-4 mb-lg-6" data-aos="fade-up" data-aos-duration="1000">
                    <a href="#" className="mb-3 d-block position-relative">
                        <div className="position-absolute d-flex justify-content-center align-items-center w-100 h-100 bg-secondary rounded text-white">
                            <i className="fas fa-link fa-2x"></i>
                        </div>
                        <img src="../assets/img/printscreens/careers-single.jpg" alt="" className="position-relative img-fluid w-100 shadow-lg rounded opacity-1-hover" />
                    </a>
                    <h4><a href="#" className="text-body">Careers Single</a></h4>
                </div>
                <div className="col-lg-6 mb-4 mb-lg-6" data-aos="fade-up" data-aos-duration="1000">
                    <a href="#" className="mb-3 d-block position-relative">
                        <div className="position-absolute d-flex justify-content-center align-items-center w-100 h-100 bg-secondary rounded text-white">
                            <i className="fas fa-link fa-2x"></i>
                        </div>
                        <img src="../assets/img/printscreens/coming-soon.jpg" alt="" className="position-relative img-fluid w-100 shadow-lg rounded opacity-1-hover" />
                    </a>
                    <h4><a href="#" className="text-body">Coming Soon</a></h4>
                </div>
                <div className="col-lg-6 mb-4 mb-lg-6" data-aos="fade-up" data-aos-duration="1000">
                    <a href="#" className="mb-3 d-block position-relative">
                        <div className="position-absolute d-flex justify-content-center align-items-center w-100 h-100 bg-secondary rounded text-white">
                            <i className="fas fa-link fa-2x"></i>
                        </div>
                        <img src="../assets/img/printscreens/404.jpg" alt="" className="position-relative img-fluid w-100 shadow-lg rounded opacity-1-hover" />
                    </a>
                    <h4><a href="#" className="text-body">404</a></h4>
                </div>
                <div className="col-lg-6 mb-4 mb-lg-6" data-aos="fade-up" data-aos-duration="1000">
                    <a href="#" className="mb-3 d-block position-relative">
                        <div className="position-absolute d-flex justify-content-center align-items-center w-100 h-100 bg-secondary rounded text-white">
                            <i className="fas fa-link fa-2x"></i>
                        </div>
                        <img src="../assets/img/printscreens/sign-in.jpg" alt="" className="position-relative img-fluid w-100 shadow-lg rounded opacity-1-hover" />
                    </a>
                    <h4><a href="#" className="text-body">Sign In</a></h4>
                </div>
                <div className="col-lg-6 mb-4 mb-lg-6" data-aos="fade-up" data-aos-duration="1000">
                    <a href="#" className="mb-3 d-block position-relative">
                        <div className="position-absolute d-flex justify-content-center align-items-center w-100 h-100 bg-secondary rounded text-white">
                            <i className="fas fa-link fa-2x"></i>
                        </div>
                        <img src="../assets/img/printscreens/recover-account.jpg" alt="" className="position-relative img-fluid w-100 shadow-lg rounded opacity-1-hover" />
                    </a>
                    <h4><a href="#" className="text-body">Recover Account</a></h4>
                </div>
                <div className="col-lg-6" data-aos="fade-up" data-aos-duration="1000">
                    <a href="#" className="mb-3 d-block position-relative">
                        <div className="position-absolute d-flex justify-content-center align-items-center w-100 h-100 bg-secondary rounded text-white">
                            <i className="fas fa-link fa-2x"></i>
                        </div>
                        <img src="../assets/img/printscreens/sign-up.jpg" alt="" className="position-relative img-fluid w-100 shadow-lg rounded opacity-1-hover" />
                    </a>
                    <h4><a href="#" className="text-body">Sign Up</a></h4>
                </div>
            </div>
        </div>
    </section>
)