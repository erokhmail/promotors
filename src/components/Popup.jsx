import { ReactComponent as CloseBut } from "../assets/images/icons/close.svg"

function Popup(props) {
    return (props.trigger) ? (
        <div id="popup__bg">
            <div className="popup container">
                <div className="popup-inner">
                    <button type="button" id="close-popup" onClick={() => props.setTrigger(false)}>
                        <CloseBut />
                    </button>
                    {props.children}
                </div>

            </div>
        </div>
    ) : '';

}

export default Popup