import React from "react";

export type AccordionBodyPropsType = {
    items: string[]
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <>
            { props.items.map( (i, index) => <li key={index}>{ i }</li> ) }
        </>
    )
}

export default AccordionBody