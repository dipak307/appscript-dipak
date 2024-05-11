import React from 'react'
import { NavLink } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import "./Footer.css"
const Footer = () => {
  return (
    <>
         <section className="contact-short">
                    <div className="grid grid-two-column">
                        <div>
                            <h3>Ready To Get Started?</h3>
                            <h3>Talk To us Today </h3>
                        </div>

                        <div>
                            <button className="btn hireme-btn">
                                <NavLink to="/"> Get Started </NavLink>
                            </button>
                        </div>
                    </div>
                </section>
                {/* footer section */}

                <footer>
                    <div className="containers grid grid-four-column">
                        <div className="footer-about">
                            <h3>Be The First to Know sign up for more update</h3>
                            <p>Hi I am Dipak and I am front-end Developer</p>
                        </div>
                        <div className="footer-subscribe">
                            <h3>Subscribe to get important updates</h3>
                            
                            <form action="#">
                                <input type="email" name="email" placeholder="YOUR E-MAIL" />

                                <input type="submit" value="subscribe" />
                            </form>
                        </div>
                        <div className="footer-social">
                            <h3>Follow Us</h3>
                            <a href='/'>deepakzende307@gmail.com</a>
                            
                            <div className="footer-social--icons">
                                  <div>
                                     <a
                                        href="https://www.instagram.com/er.dipakzen307/"
                                        target="_blank">
                                        <FaLinkedin className="icons" />
                                    </a>
                                  </div>
                                <div>
                                    <a
                                        href="https://www.instagram.com/er.dipakzen307/"
                                        target="_blank">
                                        <FaInstagram className="icons" />
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href="https://www.youtube.com/channel/UCIXiZc5P09UREkINo-frtNA"
                                        target="_blank">
                                        <FaYoutube className="icons" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-contact">
                            <h3>Call Us</h3>
                            <a href="tel:8669512928">
                            <h3>+91 8439923934</h3>
                            </a>
                            
                        </div>i
                    </div>

                    <div className="footer-bottom--section">
                        <hr />
                        <div className="container grid grid-two-column ">
                            <p>
                                @{new Date().getFullYear()} DipakZende. All Rights Reserved
                            </p>
                            <div>
                                <p>PRIVACY POLICY</p>
                                <p>TERMS & CONDITIONS</p>
                            </div>
                        </div>
                    </div>
                </footer>
    </>
  )
}

export default Footer;