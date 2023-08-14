import { useId } from "react"


function InputField({ change, label, value, placeholder, error, multy }) {
    const inputId = useId();

    function changeHandler(event) {
        change(event.target.value)
    }


    return (
        <>
            <div className={error !== '' ? 'form-element has-error' : 'form-element'} >
                <label htmlFor={inputId}>{label}</label>
                {multy ? <textarea id={inputId} placeholder={placeholder} onChange={changeHandler}>{value}</textarea>
                    : <input type="text" id={inputId} placeholder={placeholder} onChange={changeHandler} value={value} />}

            </div>
            {error !== '' ? (<p className="input-error">{error}</p>) : null}
        </>
    )
}

export default InputField