import React, {useMemo, useState} from "react";


const AllUsers = ( props: {users: Array<string>}) => {
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(AllUsers)

export const ReactMemoUsage = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState([
        'Alex', 'Kate', 'Bob', 'Mike'
    ])

    const newArray = useMemo( () => {
        console.log('users rerendered')
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users] )

    const addUser = () => {
        const newUsers = [...users, 'Neal']
        setUsers(newUsers)
    }


    return <div className='e'>

        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newArray}/>
    </div>
}


//____________useCallback_________________________


