import {ADD_TO_CART} from "../Constants";

const initialState={
    cardData:[]
}

const cardItems = (state=initialState, action) => {

    switch(action.type){
        
        case ADD_TO_CART:
            console.warn("reducer", action)
            return{
                ...state,
                cardData:action.data
            }
            break;
        default:
            return state    
    }

}
export default cardItems;