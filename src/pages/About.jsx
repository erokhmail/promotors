import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import ProgressSection from '../components/ProgressSection';
import AboutServ from '../components/AboutServ';
import OurWorks from '../components/OurWorks';
import HowSteps from '../components/HowSteps';
import Members from '../components/Members';
import Book from '../components/Book';


import './../assets/scss/about.scss'

function About() {
    const [about, setAbout] = useState({});

    useEffect(() => {
        fetch('data/aboutData.json')
            .then(resp => resp.json())
            .then(resp => {
                setAbout(resp);
            })
    }, [])


    window.document.title = about.windowTitle
    return (
        <>
            <section id="page-head">
                <div className="container">
                    <ul className="breadcrumbs">
                        <li><Link to="/" title={about.home} className="menu-link">{about.home}</Link></li>
                        <li><span className="menu-link">{about.title}</span></li>
                    </ul>
                    <h1>{about.title}</h1>
                </div>
            </section>
            <section id="progress-section">
                <ProgressSection />
            </section>
            <section id="about-service">
                <div className="container">
                    <h2 className="h2-title">{about.a_title}</h2>
                    <AboutServ />
                </div>

            </section>
            <section id="about-work">
                <div className="container">
                    <h2 className="h2-title">{about.w_title}</h2>
                    <OurWorks />
                </div>
            </section>
            <section id="how-to">
                <div className="container">
                    <div className="how">
                        <div className="block-info">
                            <h2 className="h2-title">{about.how_title}</h2>
                            <div className="how-descr">{about.how_decr} </div>
                        </div>
                        <HowSteps />
                    </div>
                </div>
            </section>
            <section id="team">
                <div className="container">
                    <div className="team">
                        <h2 className="h2-title">{about.team_title}</h2>
                        <Members />
                    </div>
                </div>
            </section>
            <Book />
        </>
    )
}

export default About