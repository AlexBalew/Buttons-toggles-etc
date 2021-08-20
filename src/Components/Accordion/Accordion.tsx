import React, {useState} from "react";
import AccordionTitle from "./AccordionComps/AccordionTitle";
import AccordionBody from "./AccordionComps/AccordionBody";

type AccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(true)

    return <div>
        <AccordionTitle title={props.titleValue} setCollapsed={setCollapsed} collapsed={!collapsed}/>
        {!collapsed && <AccordionBody/>}
    </div>
}

export default UncontrolledAccordion