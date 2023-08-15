import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import BorderedContacts from '../components/BorderedContacts';
import FormMap from '../components/FormMap'

import './../assets/scss/main.scss'
import './../assets/scss/services.scss'


function Contacts() {
    const [bContacts, setbContacts] = useState({});

    useEffect(() => {
        fetch('data/bContacts.json')
            .then(resp => resp.json())
            .then(resp => {
                setbContacts(resp);
            })
    }, [])


    window.document.title = bContacts.windowTitle
    return (
        <>
            <section id="page-head">
                <div className="container">
                    <ul className="breadcrumbs">
                        <li><Link to="/" title={bContacts.title} className="menu-link">{bContacts.home}</Link></li>
                        <li><span className="menu-link">{bContacts.title}</span></li>
                    </ul>

                    <h1>{bContacts.title}</h1>
                </div>
            </section>
            <div id="contact-section">
                <div className="container serv-cont">
                    <BorderedContacts />
                    <FormMap />
                </div>

            </div>
        </>
    )
}

export default Contacts