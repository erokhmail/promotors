import homeLogo from "./../assets/images/promotors-logo.png";

import { Link, NavLink } from "react-router-dom";


function Header() {
    const navLinks = [
        {
            title: 'Home',
            slug: '/'
        },
        {
            title: 'About',
            slug: 'about'
        },
        {
            title: 'Services',
            slug: 'services'
        },
        {
            title: 'Team',
            slug: 'team'
        },
        {
            title: 'News',
            slug: 'news'
        },
        {
            title: 'Contacts',
            slug: 'contacts'
        }
    ];

    return (
        <>
            <div id="topper" className="topper"></div>
            <header id="header" className="header">
                <div className="header-wrap container">
                    <div className="logo">
                        <Link to="/">
                            <img src={homeLogo} alt="Promotors logo" />
                        </Link>
                    </div>
                    <div className="top-wrap">
                        <nav className="main-menu">
                            <ul itemScope="https://schema.org/SiteNavigationElement">
                                {navLinks.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <NavLink itemProp="url" to={item.slug} title={item.title} className="menu-link" >{item.title}</NavLink>
                                        </li>
                                    )
                                })}

                                {/* <li>
                                    <NavLink itemProp="url" to="about" title="About" className="menu-link">About</NavLink>
                                </li>
                                <li>
                                    <NavLink itemProp="url" href="services" title="Services" className="menu-link">Services</NavLink>
                                </li>
                                <li>
                                    <a itemProp="url" href="team.html" title="Team" className="menu-link">Team</a>
                                </li>
                                <li>
                                    <a itemProp="url" href="news.html" title="News" className="menu-link">News</a>
                                </li>
                                <li>
                                    <a itemProp="url" href="contacts.html" title="Contacts" className="menu-link">Contacts</a>
                                </li> */}
                            </ul>
                        </nav>
                        <div className="phone-top">
                            <div className="phone-wrap">
                                <a href="tel:+380970915523">+38 097 091 55 23</a>
                            </div>
                        </div>
                    </div>

                    <div className="hamb-wrap">
                        <div id="mobile-sidebar">
                            <nav className="mob-menu">
                                <ul itemScope="https://schema.org/SiteNavigationElement">
                                    <li>
                                        <a itemProp="url" href="#" title="Home" className="menu-link">Home</a>
                                    </li>
                                    <li>
                                        <a itemProp="url" href="#" title="About" className="menu-link">About</a>
                                    </li>
                                    <li>
                                        <a itemProp="url" href="#" title="Services" className="menu-link">Services</a>
                                    </li>
                                    <li>
                                        <a itemProp="url" href="#" title="Team" className="menu-link">Team</a>
                                    </li>
                                    <li>
                                        <a itemProp="url" href="#" title="News" className="menu-link">News</a>
                                    </li>
                                    <li>
                                        <a itemProp="url" href="#" title="Contact" className="menu-link">Contacts</a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="phone-top">
                                <div className="phone-wrap">
                                    <a href="tel:+380970915523">+38 097 091 55 23</a>
                                </div>
                            </div>
                        </div>
                        <div id="shadow"></div>
                        <button id="hamb-bnt" className="hamb-btn hamburger hamburger--collapse" type="button">
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