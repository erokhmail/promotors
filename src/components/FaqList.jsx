import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevronDown from "../assets/images/icons/shevron-down.svg";
import chevronUp from "../assets/images/icons/shevron-up.svg";
import { useState, useEffect } from 'react';


function FaqList({ jsonDataPath }) {
    const [faq, setFaq] = useState([]);
    const AccordionItem = ({ header, ...rest }) => (
        <Item
            {...rest}
            header={
                <>
                    {header}
                    <img className="chevron-down down" src={chevronDown} alt="Chevron Down" />
                    <img className="chevron-down up" src={chevronUp} alt="Chevron Up" />
                </>
            }
        />
    );
    useEffect(() => {
        fetch(jsonDataPath)
            .then(resp => resp.json())
            .then(resp => {
                setFaq(resp);
            })
    }, [jsonDataPath]);
    return (
        <Accordion>
            <Accordion transition transitionTimeout={250} header="">
                {faq.map((item, index) => {
                    return (
                        <AccordionItem key={index} header={item.question}><div dangerouslySetInnerHTML={{ __html: item.answer }} /></AccordionItem>)
                })}

            </Accordion>
        </Accordion>
    );
}
export default FaqList;