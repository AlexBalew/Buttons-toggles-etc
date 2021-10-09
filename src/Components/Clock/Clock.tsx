import React, {useEffect, useState} from "react";

const get2DigitsFunc = (num: number) => num < 10 ? '0' + num : num

type PropsType = {}

export const Clock: React.FC<PropsType> = () => {

    const [date, setDate] = useState(new Date)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => clearInterval(intervalId)
    })

    return <div>
        <span>{get2DigitsFunc(date.getHours())}</span>
        :
        <span>{get2DigitsFunc(date.getMinutes())}</span>
        :
        <span>{get2DigitsFunc(date.getSeconds())}</span>
    </div>
}