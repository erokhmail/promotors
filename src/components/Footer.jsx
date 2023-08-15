import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { PHONE_NUMBER_1 } from "../env"
import footerLogo from "./../assets/images/promotors-logo-footer.png"
import phoneNumberFormat from "../helpers/phoneNumberFormat"
import FormFooter from "./FormFooter"

function Footer() {
    const [footerBlock, setFooterBlock] = useState({});

    useEffect(() => {
        fetch('data/footer.json')
            .then(resp => resp.json())
            .then(resp => {
                setFooterBlock(resp);
            })
    }, [])

    return (
        <footer id="footer">
            <div className="container">
                <div className="footer-block">
                    <div className="col-1">
                        <div className="logo">
                            <Link to="/">
                                <img src={footerLogo} alt={footerBlock.logo_alt} />
                            </Link>
                        </div>
                        <div className="text">{footerBlock.col_1_descr}</div>
                        <div className="sup-24">
                            <div className="title-sup">{footerBlock.col_1_sup}</div>
                            <div className="phone"><a href={`tel:${phoneNumberFormat(PHONE_NUMBER_1)}`}>{PHONE_NUMBER_1}</a></div>
                        </div>
                    </div>
                    <div className="col col-2">
                        <div className="title">{footerBlock.col_2_title}</div>
                        <nav className="about">
                            <ul itemScope="https://schema.org/SiteNavigationElement">
                                {footerBlock.about && footerBlock.about.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Link itemProp="url" to={item.link} title={item.title} className="footer-link">{item.title}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                    <div className="col col-3">
                        <div className="title">{footerBlock.col_3_title}</div>
                        <nav className="pop-serv">
                            <ul>
                                {footerBlock.pop_serv && footerBlock.pop_serv.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Link itemProp="url" to={item.link} title={item.title} className="footer-link">{item.title}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                    <div className="col col-4">
                        <div className="title">{footerBlock.col_4_title}</div>
                        <FormFooter />
                    </div>

                </div>
            </div>
            <div className="copyright">
                <p>{footerBlock.copyright}</p>
            </div>
        </footer>
    )
}

export default Footer