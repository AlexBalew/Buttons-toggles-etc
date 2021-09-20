import React, {useCallback, useMemo, useState} from "react";

export const HowToUseUseCallback = () => {
    console.log('howToUseUseCallback rendered')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState([
        'React', 'JS', 'CSS', 'HTML'
    ])

    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log(books)
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
        console.log(books)
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    }, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}> +</button>
        {counter}
        <Book addBook={memoizedAddBook2}/>
    </>

}
const BookAdder = (props: { addBook: () => void }) => {
    console.log('BookAdder')
    return <div>
        <button onClick={() => {
            props.addBook()
        }}>Add book
        </button>
    </div>
}
const Book = React.memo(BookAdder)