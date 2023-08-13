import { Link } from "react-router-dom"
import { PHONE_NUMBER_1 } from "../env"
import footerLogo from "./../assets/images/promotors-logo-footer.png"
import phoneNumberFormat from "../helpers/phoneNumberFormat"

function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer-block">
                    <div className="col-1">
                        <div className="logo">
                            <Link to="/">
                                <img src={footerLogo} alt="Promotors logo" />
                            </Link>
                        </div>
                        <div className="text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat</div>
                        <div className="sup-24">
                            <div className="title-sup">Support center 24/7</div>
                            <div className="phone"><a href={`tel:${phoneNumberFormat(PHONE_NUMBER_1)}`}>{PHONE_NUMBER_1}</a></div>
                        </div>
                    </div>
                    <div className="col col-2">
                        <div className="title">ABOUT US</div>
                        <nav className="about">
                            <ul itemScope="https://schema.org/SiteNavigationElement">
                                <li><a itemProp="url" href="about.html" title="About Us" className="footer-link active">About Us</a></li>
                                <li><a itemProp="url" href="team.html" title="Our Team" className="footer-link">Our Team</a></li>
                                <li><a itemProp="url" href="services.html" title="Services" className="footer-link">Services</a></li>
                                <li><a itemProp="url" href="faq.html" title="FAQ" className="footer-link">FAQ</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col col-3">
                        <div className="title">Popular Services</div>
                        <nav className="pop-serv">
                            <ul>
                                <li><a itemProp="url" href="#" title="Tire Repair" className="footer-link">Tire Repair</a></li>
                                <li><a itemProp="url" href="#" title="Brake Repair" className="footer-link">Brake Repair</a></li>
                                <li><a itemProp="url" href="#" title="Engine Repair" className="footer-link">Engine Repair</a></li>
                                <li><a itemProp="url" href="#" title="Charging Repair" className="footer-link">Charging Repair</a></li>
                                <li><a itemProp="url" href="#" title="Cooling System " className="footer-link">Cooling System </a></li>
                                <li><a itemProp="url" href="#" title="Wheel Alignment" className="footer-link">Wheel Alignment</a></li>
                                <li><a itemProp="url" href="#" title="Battery Starting " className="footer-link">Battery Starting </a></li>
                                <li><a itemProp="url" href="#" title="Suspension Repair" className="footer-link">Suspension Repair</a></li>

                            </ul>
                        </nav>
                    </div>
                    <div className="col col-4">
                        <div className="title">SUBSCRIBE</div>
                        <form action="" className="f-form">
                            <div className="form-element" id="youremail-wrap">
                                <label htmlFor="yourname">Your email</label>
                                <input type="email" id="youremail" name="email" placeholder="Enter your email address" />

                            </div>
                            <div className="btn-link">
                                <button type="submit" className="btn">SUBSCRIBE</button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
            <div className="copyright">
                <p>Promotors &copy; All rights reserved Copyrights 2023</p>
            </div>
        </footer>
    )
}

export default Footer