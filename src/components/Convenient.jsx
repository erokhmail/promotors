import { useState, useEffect } from 'react';

import convImage from './../assets/images/convenient.jpg';

function Convenient() {
    const [convenient, setConvenient] = useState([]);

    useEffect(() => {
        fetch('/data/convenient.json')
            .then(resp => resp.json())
            .then(resp => {
                setConvenient(resp);
            })
    }, [])

    return (
        <section id="third-section">
            {convenient.map((item, index) => {
                return (
                    <div className="convenient container" key={index}>
                        <div className="image-wrap">
                            <img src={convImage} alt={item.title} />
                        </div>
                        <div className="text-wrap">
                            <h2 className="h2-title">{item.title}</h2>
                            <p>{item.decription}</p>
                            <div className="numeric">
                                <div className="number-item">
                                    <div className="num-title">{item.num1}</div>
                                    <div className="sub-text">{item.text1}</div>
                                </div>
                                <div className="number-item">
                                    <div className="num-title">{item.num2}</div>
                                    <div className="sub-text">{item.text2}</div>
                                </div>
                            </div>
                        </div>

                    </div>
                )
            })}
        </section>
    )
}

export default Convenient