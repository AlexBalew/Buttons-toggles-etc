import React from "react";
import {ClockModePropsType} from "./Clock";
import s from './clock.module.css'


const get2DigitsFunc = (num: number) => num < 10 ? '0' + num : num

const DigitalClock: React.FC<ClockModePropsType> = ({date}) => {

    return (
        <div className={s.digitalClock}>
            <span>{get2DigitsFunc(date.getHours())}</span>
            :
            <span>{get2DigitsFunc(date.getMinutes())}</span>
            :
            <span>{get2DigitsFunc(date.getSeconds())}</span>
        </div>
    )
}

export default DigitalClock