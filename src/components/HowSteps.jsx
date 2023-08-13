import { useState, useEffect } from "react";

function HowSteps() {
    const [howSteps, setHowSteps] = useState({});

    useEffect(() => {
        fetch('/data/howSteps.json')
            .then(resp => resp.json())
            .then(resp => {
                setHowSteps(resp);
            })
    }, [])

    return (
        <div className="steps">
            <div className="step">
                <div className="step-title"><div dangerouslySetInnerHTML={{ __html: howSteps.step_1 }} /></div>
                <div className="step-descr">{howSteps.descr_1}
                </div>
            </div>
            <div className="step">
                <div className="step-title"><div dangerouslySetInnerHTML={{ __html: howSteps.step_2 }} /></div>
                <div className="step-descr">{howSteps.descr_2}
                </div>
            </div>
            <div className="step">
                <div className="step-title"><div dangerouslySetInnerHTML={{ __html: howSteps.step_3 }} /></div>
                <div className="step-descr">{howSteps.descr_3}
                </div>
            </div>
            <div className="step">
                <div className="step-title"><div dangerouslySetInnerHTML={{ __html: howSteps.step_4 }} /></div>
                <div className="step-descr">{howSteps.descr_4}
                </div>
            </div>
        </div>
    )
}

export default HowSteps