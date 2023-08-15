import { WN_API, WN_API_KEY, NEWS_CASH_TIME } from "../env"
import { useState, useEffect, useRef } from "react";
import ky from "ky";
import { toast } from "react-toastify";
import AsideNewsItem from "./AsideNewsItem";

const isDev = true;

function AsideNewsLine() {
    const [asideNewsLine, setAsideNewsLine] = useState([]);
    const fetchCount = useRef(0);


    async function fetchNews() {
        if (fetchCount.current !== 0) {
            return false;
        }
        fetchCount.current++;

        const storageNews = localStorage.getItem('asideNewsLine');
        const lastUpdate = + localStorage.getItem('lastNewsUpdate');
        if (storageNews !== null) {
            const now = new Date().getTime();
            if ((now - lastUpdate) < NEWS_CASH_TIME) {
                setAsideNewsLine(JSON.parse(storageNews));
                return false;
            }
        }

        try {
            const url = isDev ? 'mock/asidenews.json' : `${WN_API}search-news?api-key=${WN_API_KEY}&text=automobile%20maintenance&language=en&sort=publish-time&sort-direction=DESC&number=5`
            const resp = await ky(url).json();
            console.log(resp);
            setAsideNewsLine(resp.news);
            localStorage.setItem('asideNewsLine', JSON.stringify(resp.news));
            localStorage.setItem('lastNewsUpdate', new Date().getTime());

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
            <div className="aside-item">
                <div className="title">Recent posts</div>
                <div className="desription">
                    {/* {asideNewsLine.map(item => <AsideNewsItem item={item} key={item.id} value={item.publish_date} />)} */}
                    {asideNewsLine.slice()
                        .sort((a, b) => new Date(b.publish_date) - new Date(a.publish_date))
                        .map(item => <AsideNewsItem item={item} key={item.id} />)}

                </div>
            </div>

        </>
    )
}

export default AsideNewsLine