import { CATEGORIES_ACTION_TYPE } from "./category.type";

export const CATEGORIES_INITAL_STATE = {
    categoriesMap:[]
}

export const categoriesReducer = (state = CATEGORIES_INITAL_STATE,action={})=>{
    const {type,payload} = action;

    switch(type){
        case CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP:
            return {...state,categoriesMap:payload};
        default:
            return state;
    }
}