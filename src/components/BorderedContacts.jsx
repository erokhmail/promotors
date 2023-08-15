import { useState, useEffect } from "react";
import { EMAIL_1, PHONE_NUMBER_1, EMAIL_2, PHONE_NUMBER_2 } from "../env";
import phoneNumberFormat from '../helpers/phoneNumberFormat';


function BorderedContacts() {
    const [bContacts, setbContacts] = useState({});

    useEffect(() => {
        fetch('data/bContacts.json')
            .then(resp => resp.json())
            .then(resp => {
                setbContacts(resp);
            })
    }, [])

    return (
        <div className="contacts mb-60">
            <div className="contact-item">
                <div className="title">{bContacts.ad_title}</div>
                <div className="desription">
                    <p><a href={bContacts.ad_ad_link1} target="_blank">{bContacts.ad_adress1}</a></p>
                    <p><a href={bContacts.ad_ad_link2} target="_blank">{bContacts.ad_adress2}</a></p>
                </div>
            </div>
            <div className="contact-item order">
                <div className="title">{bContacts.cont_title}</div>
                <div className="desription">
                    <div className="descr-item">
                        <p><a href={`tel:${phoneNumberFormat(PHONE_NUMBER_1)}`}>{PHONE_NUMBER_1}</a></p>
                        <p><a href={`tel:${phoneNumberFormat(PHONE_NUMBER_2)}`}>{PHONE_NUMBER_2}</a></p>
                    </div>
                    <div className="descr-item">
                        <p><a href={`mailto:${EMAIL_1}`}>{EMAIL_1}</a></p>
                        <p><a href={`mailto:${EMAIL_2}`}>{EMAIL_2}</a></p>
                    </div>
                    <p></p>
                </div>
            </div>
            <div className="contact-item">
                <div className="title">{bContacts.ho_title}</div>
                <div className="desription-day">
                    <div className="days">
                        <div className="day">{bContacts.ho_day1}</div>
                        <div className="hour">{bContacts.ho_ho1}</div>
                    </div>
                    <div className="days">
                        <div className="day">{bContacts.ho_day2}</div>
                        <div className="hour">{bContacts.ho_ho2}</div>
                    </div>
                    <div className="days">
                        <div className="day">{bContacts.ho_day3}</div>
                        <div className="hour">{bContacts.ho_ho3}</div>
                    </div>
                    <div className="days">
                        <div className="day">{bContacts.ho_day4}</div>
                        <div className="hour">{bContacts.ho_ho4}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BorderedContacts