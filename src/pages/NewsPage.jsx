import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NewsLine from "../components/NewsLine";
import AsideNewsLine from "../components/AsideNewsLine";

import './../assets/scss/news-page.scss'


function NewsPage() {
    const [newsData, setNewsData] = useState({});

    useEffect(() => {
        fetch('/data/newsData.json')
            .then(resp => resp.json())
            .then(resp => {
                setNewsData(resp);
            })
    }, [])
    window.document.title = newsData.windowTitle

    return (
        <>
            <section id="page-head">
                <div className="container">

                    <ul className="breadcrumbs">
                        <li><Link to="/" title={newsData.home} className="menu-link">{newsData.home}</Link></li>
                        <li><span className="menu-link">{newsData.title}</span></li>
                    </ul>

                    <h1>{newsData.title}</h1>
                </div>
            </section>

            <div id="news-section">
                <div className="container">
                    <div className="serv-cont">
                        <div className="news-list">
                            <NewsLine />
                        </div>
                        <aside>
                            <div className="filter-post">
                                <AsideNewsLine />

                            </div>
                        </aside>
                    </div>

                </div>


            </div >
        </>

    )
}

export default NewsPage