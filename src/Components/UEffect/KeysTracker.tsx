import {useEffect, useState} from "react";

export const KeysTracker = () => {
    const [text, setText] = useState('')

    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }

    }, [text])


    return <>
        Typed text: {text}
    </>


}



