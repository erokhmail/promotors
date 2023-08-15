import { useState } from "react";
import { BOT_TOKEN, CHAT_ID, TELEGRAM_API } from "../env";
import ky from "ky";
import { toast } from "react-toastify";
import InputField from "./InputField";
import CommonErrors from "../helpers/CommonErrors";


function FormFull() {
    const [values, setValues] = useState({
        name: '',
        phone: '',
        message: ''
    })

    const [errors, setError] = useState([]);
    const [disabled, setDisabled] = useState(false)

    function changeHandler(target) {
        setValues({ ...values, [target.name]: target.value })
    }
    function blurHandler(target) {
        if (values[target.name] !== '' && errors[target.name] && errors[target.name] !== '') {
            setError({ ...errors, [target.name]: '' })
        }
    }

    function isValidPhone(phone) {
        const regex = /^\+380\d{9}$/;
        return regex.test(phone);
    }

    function validate(values) {
        const errors = {}
        if (values.name === '')
            errors.name = 'Please enter your name'

        if (values.phone === '')
            errors.phone = 'Please enter your phone number'
        else if (!isValidPhone(values.phone))
            errors.phone = 'Invalid phone number'

        if (values.message === '')
            errors.message = 'Please enter your message'

        return errors
    }

    async function submitHandler(event) {
        setDisabled(true)
        event.preventDefault()


        const errorMessages = validate(values)
        setError(errorMessages)

        if (Object.keys(errorMessages).length) {
            setDisabled(false)
            return false
        }


        const text = `
<b>Name:</b> ${values.name}
<b>Phone:</b> ${values.phone}
<b>Message:</b> ${values.message}
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
                setValues({
                    name: '',
                    phone: '',
                    message: ''
                })
            }
        } catch ({ response }) {
            toast.error(errorMessages(response))
            // toast.error(CommonErrors(response.status), { theme: "dark" })
        } finally {
            setDisabled(false)
        }

    }
    return (
        <form className="c-form" onSubmit={submitHandler}>
            <InputField multy={false} label="Your name" name="name" value={values.name} placeholder="John Doe" change={changeHandler} blur={blurHandler} error={errors.name || ''} />
            <InputField multy={false} label="Your phone" name="phone" value={values.phone} placeholder="+380970000000" change={changeHandler} blur={blurHandler} error={errors.phone || ''} />
            <InputField multy={true} label="Your message" name="message" value={values.message} placeholder="I need some service..." change={changeHandler} blur={blurHandler} error={errors.message || ''} />

            <div className="btn-link">
                <button type="submit" className="btn" disabled={disabled}>Send</button>
            </div>
        </form>
    )
}

export default FormFull