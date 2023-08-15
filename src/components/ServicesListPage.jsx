import { useEffect, useState } from "react";

function ServicesListPage() {
    const [servPage, setservPage] = useState([]);

    useEffect(() => {
        fetch('data/servListPageData.json')
            .then(resp => resp.json())
            .then(resp => {
                setservPage(resp);
            })
    }, []);
    return (
        <div className="services">
            {servPage.map((item, index) => {
                return (
                    <div className="service-item" key={index}>
                        <div className="overlay"></div>
                        <div className="toper">
                            <div className="title">{item.name}</div>
                        </div>
                        <ul>
                            {item.content.map((contentItem, contentIndex) => {
                                return (
                                    <li key={contentIndex}>{contentItem.li}</li>

                                )
                            })}
                        </ul>
                    </div>

                )
            })}
        </div>
    )
}

export default ServicesListPage