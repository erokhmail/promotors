import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import './../assets/scss/faq.scss'
import FaqList from '../components/FaqList';
import Book from '../components/Book';


function FaqPage() {
    const faqJsonPath = 'data/faqPageList.json';
    const bookClass = 'faq-p';

    const [faqPage, setfaqPage] = useState({});

    useEffect(() => {
        fetch('data/faqPage.json')
            .then(resp => resp.json())
            .then(resp => {
                setfaqPage(resp);
            })
    }, [])


    window.document.title = faqPage.windowTitle
    return (
        <>
            <section id="page-head">
                <div className="container">

                    <ul className="breadcrumbs">
                        <li><Link to="/" title={faqPage.home} className="menu-link">{faqPage.home}</Link></li>
                        <li><span className="menu-link">{faqPage.title}</span></li>
                    </ul>

                    <h1>{faqPage.title}</h1>
                </div>
            </section>
            <section id="faq-page">
                <div className="container">
                    <div className="faqq common">
                        <div className="faq-block">
                            <FaqList jsonDataPath={faqJsonPath} />
                        </div>
                        <aside>
                            <div className="right-col">
                                <div className="title">{faqPage.aside_title}</div>
                                <p>{faqPage.aside_descr}</p>
                                <Link to={faqPage.aside_link} className="btn">{faqPage.aside_link_text}</Link>

                            </div>
                        </aside>
                    </div>
                </div>
            </section>
            <Book addClass={bookClass} />
        </>

    )
}

export default FaqPage