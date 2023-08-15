import { useEffect, useState } from "react";
import FormFull from "./FormFull";
import Popup from "./Popup";



function Book({ addClass }) {
    const [book, setBook] = useState({});
    const [triggerPopup, setTriggerPopup] = useState(false)

    useEffect(() => {
        fetch('data/book.json')
            .then(resp => resp.json())
            .then(resp => {
                setBook(resp);
            })
    }, [addClass]);


    return (
        <>
            <section id="book" className={addClass}>
                <div className="sec-overlay">
                    <div className="container content">
                        <h2 className="h2-title">{book.title}</h2>
                        <div className="descrip">{book.descr}</div>
                        <button type="button" className="btn" id="open-popup" onClick={() => setTriggerPopup(true)} >{book.button}</button>
                    </div>
                </div>
            </section>
            <Popup trigger={triggerPopup} setTrigger={setTriggerPopup}>
                <FormFull />
            </Popup>
        </>
    )
}

export default Book