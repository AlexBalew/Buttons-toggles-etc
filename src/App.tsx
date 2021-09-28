import React, {useReducer, useState} from 'react';
import './App.css';
import PageTitle from "./Components/AppTitle/AppTitle";
import {OnOff} from "./Components/OnOff/OnOff";
import {Rating} from "./Components/Rating/Rating";
import ControlledCheckBox from "./Components/Input/CheckBox";
import ControlledSelect from "./Components/Input/ControlledSelect";
import ControlledInput from './Components/Input/Input';
import {SelectSpan} from "./Components/Select/SelectSpan";
import {reducer, TOGGLE_CONSTANT} from "./Components/Accordion/AccordionComps/Reducer";
import {Example} from "./Components/RMemo/ReactMemoExample";
import Accordion from "./Components/Accordion/Accordion";
import {ReactMemoUsage} from "./Components/UMemo/UseMemo";
import {HowToUseUseCallback} from "./Components/UMemo/HowToUseUseCallback";
import {FuncOne} from "./Components/UState/UState";
import {FirstExampleOfUseEffect, SetTimeOutExampleOfUseEffect} from "./Components/UEffect/UEffect";


function App() {

    //let [ratingValue, setRatingValue] = useState<RatingValueType>(3)
    //let [collapsed, setCollapsed] = useState(true)

    let [collapsed, dispatch] = useReducer(reducer, false)
    let [value, setValue] = useState(null)

    const AccordionMemo = React.memo(Accordion)
    const SelectMemo = React.memo(ControlledSelect)
    const InputMemo = React.memo(ControlledInput)
    const CheckboxMemo = React.memo(ControlledCheckBox)
    const OnOffMemo = React.memo(OnOff)
    const RatingMemo = React.memo(Rating)
    const SelectSpanMemo = React.memo(SelectSpan)


    return (
        <div className='wrapper'>
            <PageTitle title={'SuperTurbo APP'}/>

            <OnOffMemo on={false}/>
            <OnOffMemo on={false}/>

            <AccordionMemo titleValue={'Photos'}
                           collapsed={collapsed}
                           setCollapsed={() => {
                               dispatch({type: TOGGLE_CONSTANT})
                           }}
                           items={['Alex', 'Kate', 'Bob']}/>
            <br/>


            <h3>Article 1</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='star'>
                <RatingMemo/>
            </div>
            <br/>

            <h3>Article 2</h3>
            <p>Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className='star'>
                <RatingMemo/>
            </div>
            <p>
                <InputMemo/>
                <CheckboxMemo/>
                <SelectMemo/>
            </p>

            <div className='select'>
                <SelectSpanMemo value={value} onChange={setValue} items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Gomel'},
                    {value: '3', title: 'Brest'}]}/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Example/>
                <ReactMemoUsage/>
                <HowToUseUseCallback/>

                <br/>
                <br/>
                <FuncOne/>

                <br/>
                <br/>
                <div>useEffect example</div>
                <FirstExampleOfUseEffect />
                <br/>
                <br/>
                <div>useEffect with setTimeOut example</div>
                <SetTimeOutExampleOfUseEffect/>


            </div>
        </div>
    );
}

export default App;
