import { WN_API, WN_API_KEY, NEWS_CASH_TIME } from "../env"
import { useState, useEffect, useRef } from "react";
import ky from "ky";
import { toast } from "react-toastify";
import NewsItem from "./NewsItem";

function NewsLine() {
    const [newsLine, setNewsLine] = useState([]);
    const fetchCount = useRef(0);


    async function fetchNews() {
        if (fetchCount.current !== 0) {
            return false;
        }
        fetchCount.current++;

        const storageNews = localStorage.getItem('newsLine');
        const lastUpdate = + localStorage.getItem('lastNewsUpdate');
        if (storageNews !== null) {
            const now = new Date().getTime();
            if ((now - lastUpdate) < NEWS_CASH_TIME) {
                setNewsLine(JSON.parse(storageNews));
                return false;
            }
        }

        try {
            const resp = await ky(`${WN_API}search-news?api-key=${WN_API_KEY}&text=design&language=en&number=10`).json();
            console.log(resp);
            setNewsLine(resp.news);
            localStorage.setItem('newsLine', JSON.stringify(resp.news));
            localStorage.setItem('lastNewsUpdate', new Date().getTime());
        } catch (err) {
            console.log(err)
            toast.error('some text');
        }


    }

    useEffect(() => {
        fetchNews();
    }, []);



    return (
        <>
            <section id="seven-section">
                <div className="popular-news container">
                    <h2 className="h2-title">Popular articles</h2>

                    <div className="news-block">
                        {newsLine.map(item => <NewsItem item={item} key={item.id} />)}
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsLine