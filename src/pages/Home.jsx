import { useState, useEffect } from 'react'

import HomeSlider from '../components/HomeSlider'
import BenefitsList from '../components/BenefitsList'
import HomeServices from '../components/HomeServices'
import Convenient from '../components/Convenient'
import Video from '../components/Video'
import HalfBlock from '../components/HalfBlock'
import HomeNewsLine from '../components/HomeNewsLine'
import FormMap from '../components/FormMap'

import './../assets/scss/main.scss'

function Home() {
    const [homeData, setHomeData] = useState({});

    useEffect(() => {
        fetch('data/HomeData.json')
            .then(resp => resp.json())
            .then(resp => {
                setHomeData(resp);
            })
    }, [])


    window.document.title = homeData.windowTitle

    return (
        <>
            <HomeSlider />
            <BenefitsList />
            <Convenient />
            <HomeServices />
            <section id="fifth-section" >
                <div className="video-block container">
                    <div className="h2-title">{homeData.vTitle}</div>
                    <Video code="DOHsv5jQpb4" title={homeData.vTitle} />
                </div>
            </section>
            <HalfBlock />
            <HomeNewsLine />
            <section id="eight-section">
                <div className="container">
                    <FormMap />
                </div>
            </section>
        </>
    )

}

export default Home