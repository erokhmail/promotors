import { Outlet } from "react-router-dom"

import Header from "../components/Header"
import Footer from "../components/Footer"

import './../assets/scss/style.scss'

function Default() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Default