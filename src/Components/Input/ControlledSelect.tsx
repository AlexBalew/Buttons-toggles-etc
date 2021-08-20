import React, {ChangeEvent, useState} from "react";



function ControlledSelect () {

    const [parentValue, setParentValue] = useState<string|undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)

        return <select value={parentValue} onChange={onChange}>
            <option value={'1'}>None</option>
            <option value={'2'}>Minsk</option>
            <option value={'3'}>Moscow</option>
            <option value={'4'}>Kiev</option>
        </select>
    }
}

export default ControlledSelect