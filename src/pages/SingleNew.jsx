import { WN_API_KEY, WN_API } from "../env";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import ky from "ky";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import FormatDate from "../helpers/FormatDate";
import TrimTitle from "../helpers/TrimTitle";
import FormatText from "../helpers/FormatText";
import AsideNewsLine from "../components/AsideNewsLine";
import { ReactComponent as BackIcon } from "../assets/images/icons/backIcon.svg"
import DefaultImage from "./../assets/images/art-3.jpg"



import './../assets/scss/news-page.scss'


function SingleNew() {
    const [singleNew, setSingleNew] = useState({});

    useEffect(() => {
        fetch('data/singleNew.json')
            .then(resp => resp.json())
            .then(resp => {
                setSingleNew(resp);
            })
    }, [])
    window.document.title = singleNew.windowTitle
    const { hash } = useParams();
    const [news, setNewsData] = useState({});
    const [loading, setLoading] = useState(true);
    const fetchCount = useRef(0);

    async function fetchOneNews() {
        if (fetchCount.current !== 0) {
            return false;
        }
        fetchCount.current++;

        const storageNews = localStorage.getItem(hash);
        if (storageNews !== null) {
            setNewsData(JSON.parse(storageNews));
            setLoading(false)
            return false;
        }
        console.log(hash);
        try {
            const url = atob(hash);
            const resp = await ky(`${WN_API}/extract-news?api-key=${WN_API_KEY}&url=${url}`).json();
            setNewsData(resp);

            localStorage.setItem(hash, JSON.stringify(resp));
            setLoading(false);
        }
        catch (err) {
            console.log(err)
            toast.error('some text');
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchOneNews();
    }, []);

    if (loading) {
        return <Loader />
    }
    return (
        <>
            <section id="page-head">
                <div className="container">

                    <ul className="breadcrumbs">
                        <li><Link to="/" title={singleNew.home} className="menu-link">{singleNew.home}</Link></li>
                        <li><Link to="/services" title={singleNew.news} className="menu-link">{singleNew.news}</Link></li>
                        <li><span className="menu-link">{TrimTitle(news.title, 4)}</span></li>
                    </ul>

                    <h1>{TrimTitle(news.title, 4)}</h1>
                </div>
            </section>

            <div id="single-new">
                <div className="container">
                    <div id="news-section">
                        <div className="serv-cont">
                            <article className="article news-list">
                                <div className="image-wrap">
                                    <img src={news.image ? news.image : DefaultImage} alt={news.title} />
                                </div>
                                <div className="published">{FormatDate(news.publish_date)}</div>
                                <h2 className="h3-title">{news.title}</h2>
                                <div className="news-description" dangerouslySetInnerHTML={{ __html: FormatText(news.text) }}>
                                </div>

                                <Link to="/news" className="back-link">
                                    <BackIcon />
                                    <div className="back-text">
                                        <div className="top-back">back</div>
                                        <div className="bot-back">Return to all posts</div>
                                    </div>
                                </Link>
                            </article>
                            <aside>
                                <div className="filter-post">
                                    <AsideNewsLine />
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default SingleNew