import React, { useState } from 'react'
import "react-hamburger-menus/dist/style.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // 'services' | 'resources' | null

  function toggleMenu() {
    setMenuOpen(!menuOpen);
    setOpenSubmenu(null);
  }

  function closeMenu() {
    setMenuOpen(false);
    setOpenSubmenu(null);
  }

  function handleServicesClick(e) {
    e.preventDefault();
    setOpenSubmenu(openSubmenu === "services" ? null : "services");
  }

  function handleResourcesClick(e) {
    e.preventDefault();
    setOpenSubmenu(openSubmenu === "resources" ? null : "resources");
  }

  return (
    <>
      <header className="site-header header-style-1">
        <div className="">
          <div className="pbmit-bg-color-white">
            <div className="container-fluid">
              <div className="pbmit-header-content d-flex justify-content-between align-items-center">
                <div className="pbmit-logo-menuarea d-flex justify-content-between align-items-center">
                  <div className="site-branding">
                    <div className="site-title">
                      <a href="/">
                        <img className="logo-img" src="/images/logo.svg" alt="Curewith3d" />
                      </a>
                    </div>
                  </div>

                  <div className="site-navigation">
                    <nav className={menuOpen ? "main-menu navbar-expand-xl navbar-light active" : "main-menu navbar-expand-xl navbar-light"}>
                      <div className="navbar-header">
                        <button
                          className="navbar-toggler"
                          type="button"
                          onClick={toggleMenu}
                          aria-expanded={menuOpen}
                          aria-label="Toggle navigation"
                        >
                          <i className="pbmit-base-icon-menu-1"></i>
                        </button>
                      </div>

                      <div className="pbmit-mobile-menu-bg" onClick={closeMenu}></div>

                      <div className="collapse navbar-collapse clearfix show" id="pbmit-menu">
                        <div className="pbmit-menu-wrap">
                          <span className="closepanel" onClick={closeMenu}>
                            <svg
                              className="qodef-svg--close qodef-m"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20.163"
                              height="20.163"
                              viewBox="0 0 26.163 26.163"
                            >
                              <rect width="36" height="1" transform="translate(0.707) rotate(45)"></rect>
                              <rect width="36" height="1" transform="translate(0 25.456) rotate(-45)"></rect>
                            </svg>
                          </span>
                          <ul className="navigation clearfix">
                            <li className="dropdown active">
                              <a href="/" onClick={closeMenu}>Home</a>
                            </li>
                            <li>
                              <a href="/about-us" onClick={closeMenu}>About Us</a>
                            </li>

                            <li className="dropdown">
                              <a href="#" onClick={handleServicesClick}>Services</a>
                              <ul className={openSubmenu === "services" ? "open" : ""}>
                                <li><a href="/patient-specific-implants" onClick={closeMenu}>Patient Specific Implants</a></li>
                                <li><a href="/custom-3d-printed-surgical-guides" onClick={closeMenu}>Custom 3D Printed Surgical Guides</a></li>
                                <li><a href="/virtual-surgical-planning" onClick={closeMenu}>Virtual Surgical Planning</a></li>
                                <li><a href="/3d-surgical-models" onClick={closeMenu}>3D Surgical Models</a></li>
                              </ul>
							  <span onClick={handleServicesClick} class="righticon"><i class="pbmit-base-icon-angle-right"></i></span>
                            </li>

                            <li className="dropdown">
                              <a href="#" onClick={handleResourcesClick}>resources</a>
                              <ul className={openSubmenu === "resources" ? "open" : ""}>
                                <li><a href="/blog/" onClick={closeMenu}>Blogs</a></li>
                                <li><a href="/case-studies/" onClick={closeMenu}>Case Studies</a></li>
                              </ul>
							  <span onClick={handleResourcesClick} class="righticon"><i class="pbmit-base-icon-angle-right"></i></span>
                            </li>

                            <li>
                              <a href="/contact-us" onClick={closeMenu}>Contact Us</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>

                <div className="pbmit-right-box d-flex align-items-center">
                  <div className="pbmit-header-button">
                    <a href="tel:+91-920-555-98-04">
                      <span className="pbmit-header-button-text-1">+91-920-555-98-04</span>
                    </a>
                  </div>
                  <div className="pbmit-header-search-btn"></div>
                  <div className="pbmit-header-button2">
                    <a className="pbmit-btn" href="/contact-us">
                      <span className="pbmit-button-content-wrapper">
                        <span className="pbmit-button-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                            <path d="m31 50.979c-.362.007-.727-.081-1.049-.28-.929-.572-1.212-1.814-.653-2.742.047-.082 5.886-9.826 17.032-15.958h-43.33c-1.103 0-2-.897-2-2s.897-2 2-2h43.33c-11.084-6.097-16.989-15.884-17.047-15.982-.547-.934-.244-2.177.689-2.73.946-.561 2.192-.236 2.757.715.909 1.45 9.433 14.449 24.722 18.046.915.225 1.549 1.026 1.549 1.952s-.63 1.729-1.532 1.948c-15.354 3.61-23.849 16.626-24.767 18.099-.36.577-1.025.919-1.7.932z"></path>
                          </svg>
                        </span>
                        <span className="pbmit-button-text">Appointment</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}