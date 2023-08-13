function FormFull() {

    return (
        <form className="c-form" >
            <div className="form-element" id="yourname-wrap">
                <label htmlFor="yourname">Your name</label>
                <input type="text" id="yourname" name="name" placeholder="Enter your name" />
            </div>
            <div className="form-element" id="phone-wrap">
                <label htmlFor="phone">Your phone</label>
                <input type="number" id="phone" name="phone" placeholder="Enter your phone" />
            </div>


            <div className="message-info form-element">
                <label htmlFor="message">Your message</label>
                <textarea name="message" id="message" placeholder="Enter your message" ></textarea>
            </div>

            <div className="btn-link">
                <button type="submit" className="btn">Send</button>
            </div>
        </form>
    )
}

export default FormFull