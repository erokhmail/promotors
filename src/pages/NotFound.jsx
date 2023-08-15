import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

import "./../assets/scss/404.scss"

function NotFound() {
    const [notFound, setNotFound] = useState({});

    useEffect(() => {
        fetch('data/notFound.json')
            .then(resp => resp.json())
            .then(resp => {
                setNotFound(resp);
            })
    }, [])

    window.document.title = notFound.windowTitle

    return (
        <main className="n-found">
            <section id="not-found">
                <div className="bg-overlay">
                    <div className="found-content">
                        <h1 className="h1-title">{notFound.title}</h1>
                        <div className="descrip">{notFound.content}</div>
                        <Link to="/" className="btn">{notFound.linkText}</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default NotFound