import { useId } from "react"


function InputField({ name, change, label, value, placeholder, error, multy, blur }) {
    const inputId = useId();

    function changeHandler(event) {
        change(event.target)
    }
    function blurHandler(event) {
        blur(event.target)
    }


    return (
        <>
            <div className={error !== '' ? 'form-element has-error' : 'form-element'} >
                <label htmlFor={inputId}>{label}</label>
                {multy ? <textarea id={inputId} placeholder={placeholder} name={name} onChange={changeHandler} value={value} />
                    : <input type="text" id={inputId} placeholder={placeholder} name={name} onChange={changeHandler} value={value} />}
                {error !== '' ? (<p className="input-error">{error}</p>) : null}
            </div>

        </>
    )
}

export default InputField