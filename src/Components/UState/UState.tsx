import {useMemo, useState} from "react";

export const FuncOne = () => {
    console.log('Example1')

    const generateData = () => {
        //difficult counting
        console.log('Generate Data')
        return 1
    }

    //let initState = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => {
        return state + 1
    }

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}