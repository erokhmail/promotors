import homeLogo from "./../assets/images/promotors-logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import phoneNumberFormat from "../helpers/phoneNumberFormat";
import { PHONE_NUMBER_1 } from "../env";


function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHeaderFixed, setIsHeaderFixed] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prevState => !prevState);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > document.getElementById("topper").offsetHeight) {
                setIsHeaderFixed(true);
            } else {
                setIsHeaderFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div id="topper" className="topper"></div>
            <header id="header" className={`header ${isHeaderFixed ? 'fixed' : ''}`}>
                <div className="header-wrap container">
                    <div className="logo">
                        <Link to="/">
                            <img src={homeLogo} alt="Promotors logo" />
                        </Link>
                    </div>
                    <div className="top-wrap">
                        <nav className="main-menu">
                            <ul itemScope="https://schema.org/SiteNavigationElement">
                                <HeaderMenu />
                            </ul>
                        </nav>
                        <div className="phone-top">
                            <div className="phone-wrap">
                                <a href={`tel:${phoneNumberFormat(PHONE_NUMBER_1)}`}>{PHONE_NUMBER_1}</a>
                            </div>
                        </div>
                    </div>

                    <div className="hamb-wrap">
                        <div id="mobile-sidebar" className={`mobile-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
                            <nav className="mob-menu">
                                <ul itemScope="https://schema.org/SiteNavigationElement">
                                    <HeaderMenu closeMobileMenu={closeMobileMenu} />
                                </ul>
                            </nav>
                            <div className="phone-top">
                                <div className="phone-wrap">
                                    <a href={`tel:${phoneNumberFormat(PHONE_NUMBER_1)}`}>{PHONE_NUMBER_1}</a>
                                </div>
                            </div>
                        </div>
                        <div id="shadow" className={`${isMobileMenuOpen ? 'show' : ''}`}></div>
                        <button
                            id="hamb-bnt"
                            className={`hamb-btn hamburger hamburger--collapse ${isMobileMenuOpen ? 'is-active' : ''}`}
                            type="button"
                            onClick={toggleMobileMenu}
                        >
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header