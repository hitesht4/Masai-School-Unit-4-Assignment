import {legacy_createStore as createStore} from 'redux';
import {reducer} from './reducer';

const initialState={
    todos:[],
}


export const Store =createStore(reducer,initialState);


