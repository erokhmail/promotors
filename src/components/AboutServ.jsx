import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AboutServ() {
    const [aservises, setAServices] = useState([]);

    useEffect(() => {
        fetch('data/aServices.json')
            .then(resp => resp.json())
            .then(resp => {
                setAServices(resp);
            })
    }, [])
    return (
        <div className="about-service">
            {aservises.map((item, index) => {
                return (
                    <div className="about-item" key={index}>
                        <Link to={item.link} className="link-wrap"></Link>
                        <div className="item-block">
                            <div className="icon">
                                <img src={item.icon} alt={item.title} />
                            </div>
                            <span>{item.title}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AboutServ