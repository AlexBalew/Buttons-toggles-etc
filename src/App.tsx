import React, {useState} from 'react';
import './App.css';
import PageTitle from "./Components/AppTitle/AppTitle";
import {OnOff} from "./Components/OnOff/OnOff";
import UncontrolledAccordion from "./Components/Accordion/Accordion";
import {UncontrolledRating} from "./Components/Rating/Rating";
import ControlledCheckBox from "./Components/Input/CheckBox";
import ControlledSelect from "./Components/Input/ControlledSelect";



//func declaration
function App() {

    //let [ratingValue, setRatingValue] = useState<RatingValueType>(3)

    return (
        <div className='wrapper'>
            <PageTitle title={'SuperTurbo APP'}/>

            <OnOff on={false}/>
            <OnOff on={false}/>
            <OnOff on={false}/>
            <OnOff on={false}/>


            <UncontrolledAccordion titleValue={'Photos'}/>
            <UncontrolledAccordion titleValue={'Videos'}/>
            <br/>


            <h3>Article 1</h3>
            <div className='star'>
                <UncontrolledRating/>
            </div>
            <br/>

            <h3>Article 2</h3>
            <div className='star'>

                <UncontrolledRating/>
                {/*<ControlledInput />*/}
                {/*<ControlledCheckBox/>*/}
                {/*<ControlledSelect />*/}
            </div>
        </div>
    );
}

export default App;
