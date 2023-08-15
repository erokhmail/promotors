// import benefits from "./../../public/data/benefits.json"

import { useEffect, useState } from "react";

function BenefitsList() {
    const [benefits, setBenefits] = useState([]);

    useEffect(() => {
        fetch('data/benefits.json')
            .then(resp => resp.json())
            .then(resp => {
                setBenefits(resp);
            })
    }, [])


    return (
        <div id="second-section">
            <div className=" container">
                <div className="benefits">
                    {benefits.map((item, index) => {
                        return (
                            <div className="benefit-item" key={index}>
                                <div className="title">
                                    <img src={item.icon} className="img-svg" />
                                    <span>{item.title}</span>
                                </div>
                                <div className="description">
                                    {item.description}
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default BenefitsList