import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import FormFull from "./FormFull";

function Book({ addClass }) {
    const [book, setBook] = useState({});
    const handleClick = ({ }) => {
        Swal.fire({
            title: '<div className="h2-title">Book your Service Today</div>',
            html: { FormFull },
            showCloseButton: true,
            showCancelButton: false,
            confirmButtonText: 'Save',
            focusConfirm: false,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Saved!', '', 'success')
            }

        })
    }

    useEffect(() => {
        fetch('/data/book.json')
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
                        <button type="button" className="btn" id="open-popup" onClick={handleClick}>{book.button}</button>
                    </div>
                </div>
            </section>
            <div id="popup__bg">
                <div className="popup container">

                </div>
            </div>
        </>
    )
}

export default Book