import React, {useState} from "react";
import Star from "../Star/Star";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type ButtonTitleType = {
    defaultValue?: RatingValueType
}


export function UncontrolledRating(props: ButtonTitleType) {

    //код для выделения жирным отдельной конкретной компоненты Star

    /*
        let [selected, setSelected] = useState(true)

        return (
            <div>
                {selected && <Star selected={true}/>} {!selected && <Star selected={false}/>}
                <button onClick={() => {
                    setSelected(!selected)
                }}>{props.title}
                </button>
            </div>
        )
    }
    */


    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>
        </div>
    )
}


