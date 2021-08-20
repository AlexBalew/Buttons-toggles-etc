import React from "react";
import {RatingValueType} from "../Rating/Rating";

type StarPropsType = {
    selected: boolean
    setValue: (value: RatingValueType) => void
    value: RatingValueType
}

//uncontrolledStar
function Star(props: StarPropsType) {
    return <span onClick={() => {
        props.setValue(props.value)
    }}>
        {props.selected ? <b>Star </b> : "Star "}
    </span>
}

/*
function Star(props: StarPropsType) {
    return <span onClick={() => {
        props.onClick(props.value)
    }}>
        {props.selected ? <b>Star </b> : "Star "}
    </span>
}*/

export default Star