import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import FormFull from "../components/FormFull";

import mainImg from "../assets/images/single-banner.jpg"
import './../assets/scss/single-service.scss'
import FaqList from '../components/FaqList';




function SingleService() {
    const faqJsonPath = '/data/faq.json';
    const [singleServ, setSingleServ] = useState({});

    useEffect(() => {
        fetch('data/singleServ.json')
            .then(resp => resp.json())
            .then(resp => {
                setSingleServ(resp);
            })
    }, [])


    window.document.title = singleServ.windowTitle
    return (
        <>
            <section id="page-head">
                <div className="container">

                    <ul className="breadcrumbs">
                        <li><Link to="/" title={singleServ.home} className="menu-link">{singleServ.home}</Link></li>
                        <li><Link to="/services" title={singleServ.services} className="menu-link">{singleServ.services}</Link></li>
                        <li><span className="menu-link">{singleServ.title}</span></li>
                    </ul>

                    <h1>{singleServ.title}</h1>
                </div>
            </section>
            <div id="single-section">
                <div className="container single-cont">
                    <div className="banner">
                        <img src={mainImg} alt={singleServ.fullTitle} />
                    </div>
                    <div className="s-content">
                        <h2 className="h2-title">{singleServ.fullTitle}</h2>
                        <p>{singleServ.description}
                        </p>
                        <p>{singleServ.titleList}</p>
                        <ul className="s-list">
                            <div dangerouslySetInnerHTML={{ __html: singleServ.list }}></div>
                        </ul>

                        <div className="faq-block">
                            <h2 className="h2-title faq-title">{singleServ.faq_title}</h2>
                            <FaqList jsonDataPath={faqJsonPath} />

                        </div>
                        <div className="form-block">
                            <div className="h2-title">{singleServ.form_title}</div>
                            <p>{singleServ.form_descr}</p>
                            <FormFull />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default SingleService