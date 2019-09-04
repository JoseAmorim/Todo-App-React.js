import { CHANGE_DESCRIPTION, GET_TODO, CREATE_TODO } from "./ActionTypes";

import { api } from '../../services/api'

export const changeDescription = description => {
    return {
        type: CHANGE_DESCRIPTION,
        payload: description
    }
}

export const setTodos = (todos) => {
    return {
        type: GET_TODO,
        payload: todos
    }
}

export const addTodo = description => {
    return dispatch => {
        api.post('', { description }).then(() => {
            dispatch(changeDescription(''))
            dispatch(search())
        })
    }
}

export const search = () => {
    return (dispatch, getState) => {
        const { description } = getState().todo

        const search = description ? `&description__regex=/${description}/` : ''

        api.get(`?sort=-createdAt${search}`)
            .then(resp => {
                dispatch(changeDescription(description))
                dispatch(setTodos(resp.data))
            })
    }
}

export const markAsDone = (item) => {
    return dispatch => {
        api.put(`/${item._id}`, { isDone: !item.isDone }).then(() => {
            dispatch(search())
        })
    }
}

export const deleteTodo = (id) => {
    return dispatch => {
        api.delete(`/${id}`).then(() => {
            dispatch(search())
        })
    }
}

export const clear = () => {
    return dispatch => {
        dispatch(changeDescription(''))
        dispatch(search())
    }
}