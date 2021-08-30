import React, {useReducer, useState} from 'react';
import './App.css';
import PageTitle from "./Components/AppTitle/AppTitle";
import {OnOff} from "./Components/OnOff/OnOff";
import ControlledAccordion from "./Components/Accordion/Accordion";
import {UncontrolledRating} from "./Components/Rating/Rating";
import ControlledCheckBox from "./Components/Input/CheckBox";
import ControlledSelect from "./Components/Input/ControlledSelect";
import ControlledInput from './Components/Input/Input';
import {SelectSpan} from "./Components/Select/SelectSpan";
import {reducer, TOGGLE_CONSTANT} from "./Components/Accordion/AccordionComps/Reducer";


//func declaration
function App() {

    //let [ratingValue, setRatingValue] = useState<RatingValueType>(3)

    //let [collapsed, setCollapsed] = useState(true)
    let [collapsed, dispatch] = useReducer(reducer, false)

    let [value, setValue] = useState(null)



    return (
        <div className='wrapper'>
            <PageTitle title={'SuperTurbo APP'}/>

            <OnOff on={false}/>
            <OnOff on={false}/>
            <OnOff on={false}/>
            <OnOff on={false}/>

            <ControlledAccordion titleValue={'Photos'} collapsed={collapsed} setCollapsed={()=>{dispatch({type: TOGGLE_CONSTANT})}} items={['Alex', 'Kate', 'Bob']}/>
           {/* <ControlledAccordion titleValue={'Photos'} collapsed={collapsed} setCollapsed={setCollapsed} items={['Alex', 'Kate', 'Bob']}/>
            <ControlledAccordion titleValue={'Videos'} collapsed={collapsed} setCollapsed={setCollapsed} items={['sss', 'ggg', 'hhj']} />*/}
            <br/>


            <h3>Article 1</h3>
            <div className='star'>
                <UncontrolledRating/>
            </div>
            <br/>

            <h3>Article 2</h3>
            <div className='star'>

                <UncontrolledRating/>
                <ControlledInput />
                <ControlledCheckBox/>
                <ControlledSelect />
            </div>
            <div>
                <SelectSpan value={value} onChange={setValue} items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Gomel'},
                    {value: '3', title: 'Brest'}]} />
            </div>
        </div>
    );
}

export default App;
