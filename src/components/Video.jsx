import { useState } from "react"
import Overlay from "./../assets/images/video-overlay.jpg"

import './../assets/scss/video.scss'


function Video({ code, title }) {
    const [isVideo, setVideo] = useState(false)


    const playHandler = () => {
        setVideo(true);
    }
    //<iframe width="560" height="315" src="https://www.youtube.com/embed/DOHsv5jQpb4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    return (

        <div className="video-content">
            {
                isVideo ? <iframe width="560" height="315" src={`https://www.youtube.com/embed/${code}?autoplay=1`} title={`${title}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
                    :
                    <>
                        <img src={Overlay} alt="Maintenance & Repair Video" />
                        <button type="button" className="video-play-btn btn" onClick={playHandler}></button>
                    </>
            }

        </div>

    )
}

export default Video