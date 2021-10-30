import React, {useEffect, useState, MouseEvent} from "react";
import AnalogClock from "./AnalogClock";
import ModeButton from "./ModeButton";
import s from './clock.module.css'
import DigitalClock from "./DigitalClock";


export type PropsType = {}

export type ClockModePropsType = {
    date: Date
}

type ModeType = boolean

export const Clock: React.FC<PropsType> = () => {

    const [date, setDate] = useState(new Date)
    const [mode, setMode] = useState<ModeType>(false)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    const changeMode = (mode: ModeType) => {
        setMode(!mode)
    }

    return <div className={s.clockModule}>
        <div className={s.modeButton}>
            <ModeButton callback={() => changeMode(mode)}/>
        </div>
        <div>
            {
                mode ? <AnalogClock date={date}/>
                    : <DigitalClock date={date}/>

            }
        </div>

    </div>
}