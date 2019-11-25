import PropTypes from "prop-types"
import React from "react"

const logo = require('../dist/img/logo.svg');

const Header = () => (
      <header className="spyre-navbar navbar navbar-expand-lg bg-secondary navbar-dark fixed-top align-items-center" data-transparent data-text-color="#ffffff">
      <div className="container">
          <a className="navbar-brand mr-lg-5 mr-xl-7" href="#">
              <img src={logo} className="d-none d-lg-block" alt="Spyre" width="183" />
              <img src={logo} className="d-block d-lg-none" alt="Spyre" width="150" />
          </a>

          <span className="navbar-text flex-fill d-none d-md-inline-block text-white">
              Contact us: <a href="#" className="pl-2 text-white">info@spyre.com</a><a href="#" className="pl-5 text-white">+1-202-555-0149</a>
          </span>

          <div className="search d-none d-lg-flex justify-content-end ml-auto mr-2">
              <input className="form-control mr-2" type="text"></input>
              <i className="zmdi zmdi-search"></i>
          </div>

          <div className="menu-toggle">
              <div className="hamburger">
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
              <div className="cross">
                  <span></span>
                  <span></span>
              </div>
          </div>
          {/* Spyrenav-overlay */}
          <div className="spyre-navbar-overlay overlay-slide">
                <div className="container">
                    <div className="row">
                        <div className="spyre-navbar-nav-container col-md-6 col-lg-5 col-xl-4 bg-white ext-l">
                            <nav className="spyre-navbar-nav">
                                <ul className="spyre-nav">
                                    <li className="spyre-nav-item"><a href="#" className="spyre-nav-link">Overview</a></li>
                                    <li className="spyre-nav-item dropdown">
                                        <a href="#" className="spyre-nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li className="dropdown-menu-item"><a href="#" className="dropdown-menu-link">Homepage</a></li>
                                            <li className="dropdown-menu-item"><a href="#" className="dropdown-menu-link">Services</a></li>
                                            <li className="dropdown-menu-item"><a href="#" className="dropdown-menu-link">Blog</a></li>
                                            <li className="dropdown-menu-item"><a href="#" className="dropdown-menu-link">Blog single</a></li>
                                            <li className="dropdown-menu-item"><a href="#" className="dropdown-menu-link">Portfolio</a></li>
                                            <li className="dropdown-menu-item"><a href="#" className="dropdown-menu-link">About</a></li>
                                            <li className="dropdown-menu-item"><a href="#" className="dropdown-menu-link">Contact</a></li>
                                            <li className="dropdown-menu-item"><a href="#" className="dropdown-menu-link">Team</a></li>
                                            <li className="dropdown-menu-item"><a href="#" className="dropdown-menu-link">Faq</a></li>
                                            <li className="dropdown-menu-item"><a href="#" className="dropdown-menu-link">Pricing</a></li>
                                            <li className="dropdown-menu-item"><a href="#" className="dropdown-menu-link">Careers</a></li>
                                            <li className="dropdown-menu-item"><a href="#" className="dropdown-menu-link">Careers single</a></li>
                                            <li className="dropdown-menu-item"><a href="#" className="dropdown-menu-link">Coming soon</a></li>
                                            <li className="dropdown-menu-item"><a href="#" className="dropdown-menu-link">404</a></li>
                                            <li className="dropdown-menu-item"><a href="#" className="dropdown-menu-link">Sign In</a></li>
                                            <li className="dropdown-menu-item"><a href="#" className="dropdown-menu-link">Sing Up</a></li>
                                            <li className="dropdown-menu-item"><a href="#" className="dropdown-menu-link">Recover account</a></li>
                                        </ul>
                                    </li>
                                    <li className="spyre-nav-item"><a href="#" className="spyre-nav-link">Components</a></li>
                                    <li className="spyre-nav-item"><a href="#" className="spyre-nav-link">Docs</a></li>
                                    <li className="spyre-nav-item"><a href="#" target="_blank" className="spyre-nav-link">Purchase</a></li>
                                </ul>
                            </nav>
                        </div>
        
                        <div className="col-lg-7 col-xl-8 d-none d-md-block">
                            <div className="d-flex flex-column h-100">
                                <div className="d-flex h-100">
                                    <div className="align-self-center">
                                        <div className="text-uppercase"
                                            data-background-text="communication"
                                            data-color="#7079a2"
                                            data-opacity="0.02"
                                            data-font-size="85px"
                                            data-font-weight="500"
                                            data-offset-x="-5%"
                                            data-letter-spacing="5px"
                                        ></div>
                                        <div className="text-uppercase"
                                            data-background-text="planning"
                                            data-color="#7079a2"
                                            data-opacity="0.04"
                                            data-font-size="175px"
                                            data-font-weight="500"
                                            data-offset-x="29%"
                                            data-padding="7vh 0 2vh 0"
                                            data-letter-spacing="5px"
                                        ></div>
                                        <div className="text-uppercase"
                                            data-background-text="delivering"
                                            data-color="#7079a2"
                                            data-opacity="0.03"
                                            data-font-size="140px"
                                            data-font-weight="500"
                                            data-offset-x="15%"
                                            data-letter-spacing="5px"
                                        ></div>
                                    </div>
                                </div>
                                
                                <div className="mt-auto">
                                    <ul className="nav flex-nowrap float-right">
                                        <li className="nav-item">
                                            <a className="nav-link px-2" href="#" target="_blank">
                                                <i className="zmdi zmdi-twitter text-white"></i>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link px-2" href="#" target="_blank">
                                                <i className="zmdi zmdi-instagram text-white"></i>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link px-2" href="#" target="_blank">
                                                <i className="zmdi zmdi-facebook-box text-white"></i>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link px-2" href="#" target="_blank">
                                                <i className="zmdi zmdi-pinterest text-white"></i>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link px-2" href="#" target="_blank">
                                                <i className="zmdi zmdi-flickr text-white"></i>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link px-2" href="#" target="_blank">
                                                <i className="zmdi zmdi-youtube text-white"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>

      </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
