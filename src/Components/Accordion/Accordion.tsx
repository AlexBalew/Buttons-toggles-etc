import React from "react";
import AccordionTitle from "./AccordionComps/AccordionTitle";
import AccordionBody from "./AccordionComps/AccordionBody";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
    items: string[]
}



function UncontrolledAccordion(props: AccordionPropsType) {

    return <div>
        <AccordionTitle title={props.titleValue} setCollapsed={props.setCollapsed}
                        collapsed={props.collapsed === false}/>
        {!props.collapsed && <AccordionBody items={props.items}/>}
    </div>
}

export default UncontrolledAccordion