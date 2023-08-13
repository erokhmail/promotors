import { useEffect, useState } from "react";

function HomeServices() {
    const svgCode = '<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5.5V20.5H15L20 15.5V0.5H5L0 5.5Z" /><path d="M9.50977 6.35938L13.1406 10.2188C13.2422 10.3457 13.3184 10.498 13.3184 10.625C13.3184 10.7773 13.2422 10.9297 13.1406 11.0566L9.50977 14.916C9.28125 15.1699 8.90039 15.1699 8.64648 14.9414C8.39258 14.7129 8.39258 14.332 8.62109 14.0781L11.8711 10.625L8.62109 7.19727C8.39258 6.94336 8.39258 6.5625 8.64648 6.33398C8.90039 6.10547 9.28125 6.10547 9.50977 6.35938Z" fill="#EDEDED" /></svg>';
    const [services, setHomeServises] = useState([]);

    useEffect(() => {
        fetch('/data/services.json')
            .then(resp => resp.json())
            .then(resp => {
                setHomeServises(resp);
            })
    }, [])


    return (

        <section id="fourth-section">
            {services.map((item, index) => {
                return (
                    <div className="services-block container" key={index}>
                        <div className="block-head">
                            <div className="h2-title">{item.h2Title}</div>
                            <a href="./services.html" className="btn" title={item.sButton}>All services</a>
                        </div>
                        <div className="block-serv">
                            {item.service.map((service, index) => {
                                return (
                                    <div className="serv-item" key={index}>
                                        <a className="infolink" href="./services.html"></a>
                                        <div className="info">
                                            <div className="info-icon tr-10">
                                                <div className="img-svg"><img src={service.icon} alt={service.title} /></div>


                                            </div>
                                            <div className="title">{service.title}</div>
                                            <div className="descr">{service.description}</div>
                                            <div className="details">
                                                <div dangerouslySetInnerHTML={{ __html: svgCode }} />
                                                <span>DETAILS SERVICE</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                )
            })}

        </section>
    )
}

export default HomeServices