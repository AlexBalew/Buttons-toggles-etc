import React, {useState, KeyboardEvent, useEffect} from "react";
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function SelectSpan(props: SelectPropsType) {

    let [active, setActive] = useState(false)

    let [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItems = props.items.find(i => i.value === props.value)
    const hoveredItems = props.items.find(i => i.value === hoveredElementValue)

    const clickedItems = () => {
        setActive(!active)
    }

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const onItemClick = (value: any) => {
        props.onChange(value);
        clickedItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {

        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }

        for (let i = 0; i < props.items.length; i++) {
            if (props.items[i].value === hoveredElementValue) {
                const nextElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                if (nextElement) {
                    props.onChange(nextElement.value)
                }
                return
            }
        }
        props.onChange(props.items[0].value)
    }

    const viewMode = (value: any) => {
        props.onChange(value)
    }

    return (
        <div>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span onBlur={viewMode}
                    className={s.main}
                    onClick={clickedItems}><b>{selectedItems && selectedItems.title}</b>
                </span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(i =>
                            <div
                                onMouseEnter={() => {
                                    setHoveredElementValue(i.value)
                                }}
                                className={s.item + ' ' + (hoveredItems === i ? s.selected : '')}
                                key={i.value}
                                onClick={() => {
                                    onItemClick(i.value)
                                }}
                            >{i.title}</div>)}
                    </div>
                }
            </div>
        </div>
    )
}
