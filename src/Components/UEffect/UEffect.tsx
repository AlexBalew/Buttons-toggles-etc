import {useEffect, useState} from "react";

export const FirstExampleOfUseEffect = () => {
    const [fake, setFake] = useState(1)
    const [count, setCount] = useState(1)
    console.log('First Example')

    useEffect(() => {
        console.log('useEffect works after every render')
        document.title = count.toString()
        //api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementById
        //document.title = 'User'
    })

    useEffect(() => {
        console.log('useEffect works after first render only')
        document.title = count.toString()
        //api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementById
        //document.title = 'User'
    }, [])

    useEffect(() => {
        console.log('useEffect works when count is changed')
        document.title = count.toString()
        console.log('title was changed')
        //api.getUsers().then('')
        //setInterval
        //indexedDB
        //document.getElementById
        //document.title = 'User'
    }, [count])

    return <>
        Current count is {count} {fake}
        <button onClick={() => {
            setFake(fake + 1)
        }}>fake+
        </button>
        <button onClick={() => {
            setCount(count + 1)
        }}>count+
        </button>
    </>
}

export const SetTimeOutExampleOfUseEffect = () => {
    const [fake, setFake] = useState(1)
    const [count, setCount] = useState(1)
    const [time, setTime] = useState<Date>()
    console.log('setTimeOut Example')

    /*  useEffect(() => {

          setTimeout(() => {
              console.log('useEffect has changed title after 2000ms')
              document.title = count.toString()
          }, 2000)
      }, [count])*/
    /*
        useEffect(() => {

            setInterval(() => {
                console.log('useEffect has increased count by 1 every 1000ms')
                setCount((state) => state + 1)
            }, 2000)
        }, [])*/


    useEffect(() => {
        let intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000)
        console.log(intervalId)
        return () => clearInterval(intervalId)
    }, [])

    const actualTime = time?.toLocaleTimeString()

    return <>
        Current count is {count}, fake - {fake}, time - {actualTime}
        <button onClick={() => {
            setFake(fake + 1)
        }}>fake+
        </button>
        <button onClick={() => {
            setCount(count + 1)
        }}>count+
        </button>
    </>
}



