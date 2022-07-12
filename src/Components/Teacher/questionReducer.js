import { ADD_QUESTION } from "./types";

const initialState = {
    questions : []
}

export default function questionReducers (state = initialState, action){
    switch(action.type){
        case ADD_QUESTION:
            return{
                ...state,
                questions : action.payload
            }
        default:
            return state;
    }
}