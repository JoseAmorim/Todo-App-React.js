import { CHANGE_DESCRIPTION, GET_TODO, CREATE_TODO } from "../actions/ActionTypes";

const initialState = {
    todos: [],
    description: ''   
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_DESCRIPTION:
            return {
                ...state,
                description: action.payload
            }
        case GET_TODO:
            return {
                ...state,
                todos: action.payload
            }
        case CREATE_TODO:
            return {
                ...state,
                description: ''
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer