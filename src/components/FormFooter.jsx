import { useState } from "react";
import { BOT_TOKEN, CHAT_ID, TELEGRAM_API } from "../env"
import ky from "ky";
import { toast } from "react-toastify";
import InputField from "./InputField";
import CommonErrors from "../helpers/CommonErrors";


function FormFooter() {
    const [values, setValues] = useState({
        email: ''
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

    function isValidPhone(email) {
        const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    function validate(values) {
        const errors = {}

        if (values.email === '')
            errors.email = 'Please enter your email '
        else if (!isValidPhone(values.email))
            errors.email = 'Invalid email address'

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
<b>Request to subscribe:</b> ${values.email}
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
                    email: ''
                })
            }
        } catch ({ response }) {
            toast.error(CommonErrors(response.status), { theme: "dark" })
        } finally {
            setDisabled(false)
        }

    }
    return (
        <form className="c-form footer-form" onSubmit={submitHandler}>
            <InputField multy={false} label="Your email" name="email" value={values.email} placeholder="jdoe@gmail.com" change={changeHandler} blur={blurHandler} error={errors.email || ''} />

            <div className="btn-link">
                <button type="submit" className="btn" disabled={disabled}>Subscribe</button>
            </div>
        </form>
    )
}

export default FormFooter