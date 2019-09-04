import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import todoReducer from './reducers/todo'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk';

const reducers = combineReducers({
    todo: todoReducer
})

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()

const storeConfig = () => {
    // return createStore(reducers, compose(applyMiddleware(promise), devTools))
    return applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)
}

export default storeConfig