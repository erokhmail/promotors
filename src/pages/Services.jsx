import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ServicesListPage from '../components/ServicesListPage';
import BorderedContacts from '../components/BorderedContacts';

import './../assets/scss/services.scss'


function ServicePage() {
    const [servicesData, setServicesData] = useState({});

    useEffect(() => {
        fetch('data/servicesData.json')
            .then(resp => resp.json())
            .then(resp => {
                setServicesData(resp);
            })
    }, [])


    window.document.title = servicesData.windowTitle
    return (
        <>
            <section id="page-head">
                <div className="container">
                    <ul className="breadcrumbs">
                        <li><Link to="/" title={servicesData.title} className="menu-link">{servicesData.home}</Link></li>
                        <li><span className="menu-link">{servicesData.title}</span></li>
                    </ul>

                    <h1>{servicesData.title}</h1>
                </div>
            </section>
            <div id="service-section">
                <div className="container serv-cont">
                    <ServicesListPage />
                    <aside>
                        <BorderedContacts />
                    </aside>
                </div>

            </div>
        </>
    )
}

export default ServicePage