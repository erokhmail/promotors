import PrImg from "./../assets/images/progress-img.jpg";
import Progress from "./Progress";
import { useState, useEffect } from "react";

function ProgressSection() {

    const [completed_1, setCompleted_1] = useState(0);
    const [completed_2, setCompleted_2] = useState(0);
    const [progressData, setProgressData] = useState(0);
    const value_1 = progressData.prog_num_1;
    const value_2 = progressData.prog_num_2;
    useEffect(() => {
        const interval_1 = setInterval(() => {
            if (completed_1 < value_1) {
                setCompleted_1(prev => prev + 1);
            } else {
                clearInterval(interval_1);
            }
        }, 20);

        const interval_2 = setInterval(() => {
            if (completed_2 < value_2) {
                setCompleted_2(prev => prev + 1);
            } else {
                clearInterval(interval_2);
            }
        }, 20);

        return () => {
            clearInterval(interval_1);
            clearInterval(interval_2);
        };
    }, [completed_1, completed_2, value_1, value_2]);

    useEffect(() => {
        fetch('data/progressData.json')
            .then(resp => resp.json())
            .then(resp => {
                setProgressData(resp);
            })
    }, []);

    return (
        <div className="progress container">
            <div className="progress-bar">
                <h2 className="h2-title">{progressData.title}
                </h2>
                <div className="text">{progressData.descr}
                </div>
                <div className="progress-items">
                    <div className="item">
                        <Progress completed={completed_1} value={value_1} title={progressData.prog_title_1} />
                    </div>
                    <div className="item">
                        <Progress completed={completed_2} value={value_2} title={progressData.prog_title_2} />
                    </div>
                </div>
            </div>
            <div className="img-wrapper">
                <img src={PrImg} alt={progressData.title} />
            </div>
        </div>
    );
}

export default ProgressSection;
