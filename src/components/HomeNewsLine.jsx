import { WN_API, WN_API_KEY, NEWS_CASH_TIME } from "../env"
import { useState, useEffect, useRef } from "react";
import ky from "ky";
import { toast } from "react-toastify";
import NewsItem from "./NewsItem";


const isDev = true;

function HomeNewsLine() {
    const [newsLine, setHomeNewsLine] = useState([]);
    const fetchCount = useRef(0);


    async function fetchNews() {
        if (fetchCount.current !== 0) {
            return false;
        }
        fetchCount.current++;

        // const storageNews = localStorage.getItem('newsLine');
        // const lastUpdate = + localStorage.getItem('lastNewsUpdate');
        // if (storageNews !== null) {
        //     const now = new Date().getTime();
        //     if ((now - lastUpdate) < NEWS_CASH_TIME) {
        //         setHomeNewsLine(JSON.parse(storageNews));
        //         return false;
        //     }
        // }

        try {
            const url = isDev ? 'mock/homenews.json' : `${WN_API}search-news?api-key=${WN_API_KEY}&text=automobile%20maintenance&language=en&sort=publish-time&sort-direction=DESC&number=3`
            const resp = await ky(url).json();
            console.log(resp);
            setHomeNewsLine(resp.news);
            // localStorage.setItem('newsLine', JSON.stringify(resp.news));
            // localStorage.setItem('lastNewsUpdate', new Date().getTime());
        } catch (err) {
            console.log(err)
            toast.error('something went wrong', { theme: dark });
        }


    }

    useEffect(() => {
        fetchNews();
    }, []);



    return (
        <>
            <section id="seven-section">
                <div className="popular-news container">
                    <h2 className="h2-title">Latest news</h2>

                    <div className="news-block">
                        {newsLine
                            .sort((a, b) => new Date(b.publish_date) - new Date(a.publish_date))
                            .map(item => <NewsItem item={item} key={item.id} />)}
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeNewsLine