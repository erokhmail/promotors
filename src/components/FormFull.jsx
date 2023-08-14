import { BOT_TOKEN, CHAT_ID, TELEGRAM_API } from "../env"
import { useState } from "react";
import ky from "ky";
import { toast } from "react-toastify";
import InputField from "./InputField";


function FormFull() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    // const [values, setValues] = useState({
    //     name: '',
    //     email: '',
    //     message: '',
    //     agree: false
    //   })


    const [nameError, setNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [messageError, setMessageError] = useState('');


    function isValidPhone(phone) {
        const regex = /^\+380\d{9}$/;
        return regex.test(phone);
    }



    async function SubmitHandler(event) {
        event.preventDefault()

        if (name === "") {
            setNameError('Enter your name')

        } else {
            setNameError('')
        }
        if (phone === "") {
            setPhoneError('Enter your phone number ')

        } else {
            if (isValidPhone(phone)) {
                setPhoneError('')
            } else {
                setPhoneError('Invalid phone number')

            }
        }

        if (message === "") {
            setMessageError('Enter your message')

        } else {
            setMessageError('')
        }






        const text = `
<b>Name:</b> ${name}
<b>Phone:</b> ${phone}
<b>Message:</b> ${message}
      `;

        const formData = new FormData();
        formData.append('chat_id', CHAT_ID);
        formData.append('text', text);
        formData.append('parse_mode', 'HTML');

        try {
            const resp = await ky.post(`${TELEGRAM_API}${BOT_TOKEN}/sendMessage`, {
                body: formData
            }).json()
            console.log(resp);
            if (resp.ok) {
                toast.success('Thanks! Your request successfully sent', { theme: "dark" })
                setName('')
                setPhone('')
                setMessage('')
            }
        } catch (error) {
            toast.error('Ooops... Something went wrong. Please try again later ', { theme: "dark" })

        }



    }
    return (
        <form className="c-form" onSubmit={SubmitHandler}>
            <InputField multy={false} label="Your name" value={name} placeholder="Enter your name" change={(val) => setName(val)} error={nameError} />
            <InputField multy={false} label="Your phone" value={phone} placeholder="Enter your phone" change={(val) => setPhone(val)} error={phoneError} />
            <InputField multy={true} label="Your message" value={message} placeholder="Enter your message" change={(val) => setMessage(val)} error={messageError} />

            <div className="btn-link">
                <button type="submit" className="btn">Send</button>
            </div>
        </form>
    )
}

export default FormFull