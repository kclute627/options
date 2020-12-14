import {applyMiddleware, createStore, combineReducers} from 'redux'
import {dashboardReducer} from './reducers/dashboardReducer';
import thunk from 'redux-thunk';
// import {composeWithDevTools} from 'redux-devtools-extension'

// change if going to production
const middleware = [thunk]

const reducer = combineReducers({
    dashboard: dashboardReducer
})
const store = createStore(
    reducer,
    

    

)

export default store 