import React from "react";
import AccordionTitle from "./AccordionComps/AccordionTitle";
import AccordionBody from "./AccordionComps/AccordionBody";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
    items: string[]
}

const AccordionTitleMemo = React.memo(AccordionTitle)
const AccordionBodyMemo = React.memo(AccordionBody)

function Accordion(props: AccordionPropsType) {

    return <div>
        <AccordionTitleMemo title={props.titleValue} setCollapsed={props.setCollapsed}
                        collapsed={props.collapsed === false}/>
        {!props.collapsed && <AccordionBodyMemo items={props.items}/>}
    </div>
}

export default Accordion