//App.js
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
    const dispatch = useDispatch();    
    const [number, setNumber] = useState(0);
    const stateNumber = useSelector((state) => state.counter.number);
    const onChangeHanlder = (e) => {
        const { value } = e.target;
         setNumber(+value);
        };
    const onClickAddNumberHandler = () =>{dispatch(addNumber(number));};
    const onClickMinusNumberHandler = () =>{dispatch(minusNumber(number));};

    return (
    <div>
        <div>{stateNumber}</div>
        <input type="number" onChange={onChangeHanlder} />
        <button onClick={onClickAddNumberHandler}> + </button>
        <button onClick={onClickMinusNumberHandler}> - </button>
    </div>
  );
};

export default App;


//counter.js
import {createStore} from 'redux';

const initialState = { number: 0, };

const ADD_NUMBER = 'ADD_NUMBER';
const MINUS_NUMBER = 'MINUS_NUMBER';

export const addNumber = (payload) => {return {type: ADD_NUMBER, payload, }; };
export const minusNumber = (payload) => {return {type: MINUS_NUMBER, payload, }; };

const counter = (state = initialState, action) => { 
    switch(action.type) {
        case ADD_NUMBER: 
            return {number: state.number + action.payload}
        case MINUS_NUMBER: 
            return {number: state.number - action.payload}
        default: 
            return state; 
        }
    };

const store = createStore(counter);

export default counter;
