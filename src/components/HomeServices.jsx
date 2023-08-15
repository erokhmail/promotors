import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomeServices() {
    const svgCode = '<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5.5V20.5H15L20 15.5V0.5H5L0 5.5Z" /><path d="M9.50977 6.35938L13.1406 10.2188C13.2422 10.3457 13.3184 10.498 13.3184 10.625C13.3184 10.7773 13.2422 10.9297 13.1406 11.0566L9.50977 14.916C9.28125 15.1699 8.90039 15.1699 8.64648 14.9414C8.39258 14.7129 8.39258 14.332 8.62109 14.0781L11.8711 10.625L8.62109 7.19727C8.39258 6.94336 8.39258 6.5625 8.64648 6.33398C8.90039 6.10547 9.28125 6.10547 9.50977 6.35938Z" fill="#EDEDED" /></svg>';
    const [services, setHomeServices] = useState({});

    useEffect(() => {
        fetch('data/services.json')
            .then(resp => resp.json())
            .then(resp => {
                setHomeServices(resp);
            })
    }, [])


    return (

        <section id="fourth-section">

            <div className="services-block container">
                <div className="block-head">
                    <div className="h2-title">{services.h2Title}</div>
                    <Link to="services" className="btn" title={services.sButton}>{services.sButton}</Link>
                </div>
                <div className="block-serv">
                    {services.service_block && services.service_block.map((item, index) => {
                        return (
                            <div className="serv-item" key={index}>
                                <Link className="infolink" to={item.link}></Link>
                                <div className="info">
                                    <div className="info-icon tr-10">
                                        <div className="img-svg"><img src={item.icon} alt={item.title} /></div>


                                    </div>
                                    <div className="title">{item.title}</div>
                                    <div className="descr">{item.description}</div>
                                    <div className="details">
                                        <div dangerouslySetInnerHTML={{ __html: svgCode }} />
                                        <span>{item.button}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>

        </section>
    )
}

export default HomeServices