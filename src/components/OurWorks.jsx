import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function OurWorks() {
    const [awork, setAWork] = useState([]);

    useEffect(() => {
        fetch('data/aWork.json')
            .then(resp => resp.json())
            .then(resp => {
                setAWork(resp);
            })
    }, [])

    return (
        <div className="about-work">
            {awork.map((item, index) => {
                return (
                    <div className="work-item" key={index}>
                        <Link to={item.link} className="link-wrap"></Link>
                        <div className="item-work">
                            <div className="img-w-wrap">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className="text-top">{item.title}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default OurWorks