import PrImg from "./../assets/images/progress-img.jpg"
import Progress from "./Progress"

function ProgressSection() {
    return (
        <div className="progress container">
            <div className="progress-bar">
                <h2 className="h2-title">
                    we make auto repair more convenient
                </h2>
                <div className="text">Amet commodo nulla facilisi nullam vehicula. Purus in mollis nunc sed. Accumsan tortor
                    posuere ac ut consequat semper viverra nam. Augue lacus viverra vitae congue eu consequat ac felis donec
                </div>
                <Progress value={40} max={100} />

                <div className="progress-items">
                    <div className="item">
                        <div className="item-title">
                            <div className="title">highly qualified experts</div>
                        </div>
                        <div className="animated-progress progress-blue">
                            <div className="progress-line" data-progress="90"></div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-title">
                            <div className="title">clean, modern facility</div>
                        </div>
                        <div className="animated-progress progress-blue">
                            <div className="progress-line" data-progress="99"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-wrapper">
                <img src={PrImg} alt="We make auto repair more convenient" />
            </div>
        </div>
    )
}

export default ProgressSection