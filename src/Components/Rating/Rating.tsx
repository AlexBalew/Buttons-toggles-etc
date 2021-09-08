import React, {useState} from "react";
import Star from "../Star/Star";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type ButtonTitleType = {
    defaultValue?: RatingValueType
}


export function Rating(props: ButtonTitleType) {

    //код для выделения отдельной конкретной компоненты Star

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

    const StarMemo = React.memo(Star)

    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            <StarMemo selected={value > 0} setValue={setValue} value={1}/>
            <StarMemo selected={value > 1} setValue={setValue} value={2}/>
            <StarMemo selected={value > 2} setValue={setValue} value={3}/>
            <StarMemo selected={value > 3} setValue={setValue} value={4}/>
            <StarMemo selected={value > 4} setValue={setValue} value={5}/>
        </div>
    )
}


