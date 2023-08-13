import { Link } from "react-router-dom";
// import helpers from "../helpers";

function NewsItem({ item }) {
    const hash = btoa(item.url);
    // atob- zvorotya
    return (
        <>
            {/* <div className="card blog-post my-4 my-sm-5 my-md-0">
                        <img src={item.image} alt={item.title}/>
                        <div className="card-body">
                            <div className="details mb-3">
                                {helpers(item.publish_date)}
                            </div>
                            <h5 className="card-title">{item.title}</h5>
                            <p>{item.summary}</p>
                            <Link to={`/news/${hash}`} className="d-block mt-3">Read More...</Link>
                        </div>
                    </div> */}
            {/* <article className="article full">
                <Link to={`/news/${hash}`} className="infolink art-link" title={item.title}></Link>
                <div className="info-art">
                    <div className="image-wrap">
                        <img src={item.image} alt={item.title} />
                        <div className="tag-n-title">
                            <div className="tag">Car advice</div>
                            <div className="title">{item.title}</div>
                            <div className="details">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 5.5V20.5H15L20 15.5V0.5H5L0 5.5Z" />
                                    <path
                                        d="M9.50977 6.35938L13.1406 10.2188C13.2422 10.3457 13.3184 10.498 13.3184 10.625C13.3184 10.7773 13.2422 10.9297 13.1406 11.0566L9.50977 14.916C9.28125 15.1699 8.90039 15.1699 8.64648 14.9414C8.39258 14.7129 8.39258 14.332 8.62109 14.0781L11.8711 10.625L8.62109 7.19727C8.39258 6.94336 8.39258 6.5625 8.64648 6.33398C8.90039 6.10547 9.28125 6.10547 9.50977 6.35938Z"
                                        fill="#EDEDED" />
                                </svg>
                                <span>Read more</span>
                            </div>
                        </div>
                    </div>
                </div> 
        </article >*/}
            <article className="article small-art">
                <Link to={`/news/${hash}`} className="infolink art-link" title={item.title}></Link>
                <div className="info-art">
                    <div className="image-wrap">
                        <img src={item.image} alt={item.title} />
                        <div className="tag">Car advice</div>
                    </div>

                    <h3 className="title">{item.title}</h3>

                    <div className="published">{item.publish_date}</div>
                    <div className="details">
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 5.5V20.5H15L20 15.5V0.5H5L0 5.5Z" />
                            <path
                                d="M9.50977 6.35938L13.1406 10.2188C13.2422 10.3457 13.3184 10.498 13.3184 10.625C13.3184 10.7773 13.2422 10.9297 13.1406 11.0566L9.50977 14.916C9.28125 15.1699 8.90039 15.1699 8.64648 14.9414C8.39258 14.7129 8.39258 14.332 8.62109 14.0781L11.8711 10.625L8.62109 7.19727C8.39258 6.94336 8.39258 6.5625 8.64648 6.33398C8.90039 6.10547 9.28125 6.10547 9.50977 6.35938Z"
                                fill="#EDEDED" />
                        </svg>
                        <span>Read more</span>
                    </div>
                </div>
            </article>
        </>

    )
}

export default NewsItem;