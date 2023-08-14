import { Link } from "react-router-dom";
import FormatDate from "../helpers/FormatDate";
import TrimTitle from "../helpers/TrimTitle";
import DefaultImageSm from "./../assets/images/side-news-3.jpg"


function AsideNewsItem({ item }) {
    const hash = btoa(item.url);
    // atob- zvorotya
    return (
        <>
            <article className="post-item">
                <Link to={`/news/${hash}`} className="art-link" title={item.title}></Link>

                <div className="info-post">
                    <div className="image-wrap">
                        <img src={item.image ? item.image : DefaultImageSm} alt={item.title} />
                    </div>
                    <div className="info-det">
                        <h3 className="title">{TrimTitle(item.title, 6)}</h3>
                        <div className="published">{FormatDate(item.publish_date)}</div>
                    </div>
                </div>
            </article>
        </>

    )
}

export default AsideNewsItem;