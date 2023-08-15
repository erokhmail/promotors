import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HalfBlock() {
    const [halfBlock, setHalfBlock] = useState([]);

    useEffect(() => {
        fetch('data/halfblock.json')
            .then(resp => resp.json())
            .then(resp => {
                setHalfBlock(resp);
            })
    }, [])


    return (
        <section id="six-section">
            {halfBlock.map((item, index) => {
                return (
                    <div className={`photo-info ${item.direction}`} key={index}>
                        <div className="img-wrap">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className="text-wrap">
                            <div className="text-block">
                                <div className="transparant-suptitle">{item.sup}</div>
                                <div className="h2-title">{item.title}</div>
                                <div dangerouslySetInnerHTML={{ __html: item.content }} />
                                <div className="">
                                    <Link to="services" className="btn btn-serv">{item.linkText}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            })}


        </section>
    )
}

export default HalfBlock