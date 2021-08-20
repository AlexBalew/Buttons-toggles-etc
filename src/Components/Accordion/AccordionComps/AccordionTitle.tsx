import React from "react";

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => {
            props.setCollapsed(props.collapsed)
        }}>{props.title}</h3>
    )
}

export default AccordionTitle
