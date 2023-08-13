import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import './../assets/scss/team.scss'
import Members from '../components/Members';

function Team() {
    const [teamData, setTeamData] = useState({});

    useEffect(() => {
        fetch('/data/teamData.json')
            .then(resp => resp.json())
            .then(resp => {
                setTeamData(resp);
            })
    }, [])


    window.document.title = teamData.windowTitle
    return (
        <>
            <section id="page-head">
                <div className="container">
                    <ul className="breadcrumbs">
                        <li><Link to="/" title={teamData.title} className="menu-link">{teamData.home}</Link></li>
                        <li><span className="menu-link">{teamData.title}</span></li>
                    </ul>

                    <h1>{teamData.title}</h1>
                </div>
            </section>
            <section id="team">
                <div className="container">
                    <div className="team common">
                        <Members />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team