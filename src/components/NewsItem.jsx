import { Link } from "react-router-dom";
import FormatDate from "../helpers/FormatDate";
import { ReactComponent as ReadMore } from "../assets/images/icons/read-more.svg"


function NewsItem({ item }) {
    const hash = btoa(item.url);
    // atob- zvorotya
    return (
        <>

            <article className="article small-art">
                <Link to={`/news/${hash}`} className="infolink art-link" title={item.title}></Link>
                <div className="info-art">
                    <div className="image-wrap">
                        <img src={item.image} alt={item.title} />
                        <div className="tag">{item.author}</div>
                    </div>

                    <h3 className="title">{item.title}</h3>

                    <div className="published">{FormatDate(item.publish_date)}</div>
                    <div className="details">
                        <ReadMore />
                        <span>Read more</span>
                    </div>
                </div>
            </article>
        </>

    )
}

export default NewsItem;