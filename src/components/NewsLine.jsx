import { WN_API, WN_API_KEY, NEWS_CASH_TIME } from "../env"
import { useState, useEffect, useRef } from "react";
import ky from "ky";
import { toast } from "react-toastify";
import NewsItem from "./NewsItem";
import ReactPaginate from 'react-paginate';


const isDev = true;

function NewsLine() {
    const [newsLine, setNewsLine] = useState([]);
    const fetchCount = useRef(0);
    const itemsPerPage = 4;
    const [itemOffset, setItemOffset] = useState(0);


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
            const url = isDev ? 'mock/news.json' : `${WN_API}search-news?api-key=${WN_API_KEY}&text=automobile%20maintenance&language=en&sort=publish-time&sort-direction=DESC&number=10`
            const resp = await ky(url).json();
            console.log(resp);
            setNewsLine(resp.news);
            localStorage.setItem('newsLine', JSON.stringify(resp.news));
            localStorage.setItem('lastNewsUpdate', new Date().getTime());
        } catch (err) {
            console.log(err)
            toast.error('something went wrong');
        }

    }

    useEffect(() => {
        fetchNews();
    }, []);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = newsLine.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(newsLine.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % newsLine.length;
        setItemOffset(newOffset);
    };

    return (
        <>

            <div className="news-block">
                {currentItems.map(item => <NewsItem item={item} key={item.id} />)}
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName="paggination"
                pageClassName="pag-item"
            />


        </>
    )
}

export default NewsLine