import React, {useState} from "react";


const NewMessageCounter = ( props: {count: number}) => {
    return <div>{props.count}</div>
}

const AllUsers = ( props: {users: Array<string>}) => {
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(AllUsers)
const MessageCounter = React.memo(NewMessageCounter)

export const Example = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState([
        'Alex', 'Kate', 'Bob', 'Mike'
    ])

    const addUser = () => {
        const newUsers = [...users, 'Neal']
        setUsers(newUsers)
    }



    return <div className='e'>

    <button onClick={()=> setCounter(counter+1)}>+</button>
    <button onClick={addUser}>+</button>
        <MessageCounter count={counter}/>
        <Users users={users} />
    </div>

}

