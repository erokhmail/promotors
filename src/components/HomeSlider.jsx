import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";

function HomeSlider() {
    const [sliders, setSliders] = useState([]);

    useEffect(() => {
        fetch('/data/slider.json')
            .then(resp => resp.json())
            .then(resp => {
                setSliders(resp);
            })
    }, []);

    const sliderSettings = {
        className: "main-slider",
        dots: true,
        lazyLoad: true,
        infinite: true,
        // fade: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 5000,
        easing: 'ease',
        initialSlide: 0
    };
    return (
        <section id="first-section">
            <div className="first-section-wrap">
                <h1 className="home-h1">Auto Maintenance & Repair Service</h1>
                <Slider {...sliderSettings} >

                    {sliders.map((item, index) => {
                        return (

                            <div className="slider-item" key={index}>
                                <div className="image-block">
                                    <div className="under-text"></div>
                                    <div className="photo-slide">
                                        <img src={item.slide.image} alt={item.slide.title} />
                                    </div>
                                </div>
                                <div className="text-block container">
                                    <div className="transparant-title sup">
                                        {item.slide.sup}
                                    </div>
                                    <div className="main-text">
                                        <h2 className="slider-title">{item.slide.title}</h2>
                                        <p className="slider-subtitle">{item.slide.description}</p>
                                        <Link className="btn" to={item.slide.link}>{item.slide.button}</Link>
                                    </div>
                                    <div className="transparant-title sub">{item.slide.sub}</div>
                                </div>
                            </div>

                        )
                    })}
                </Slider>
            </div>


        </section >
    )

}

export default HomeSlider