import {CURRENT_VIEW, CURRENT_VIEW_REQUEST} from '../constants/dashboardConstants';

const initialState = {
    currentView: 'open',
    loading: false,
}


export const dashboardReducer =(state=initialState, action) => {


    const {payload, type} = action;

    switch(type){
        case CURRENT_VIEW_REQUEST:
            return{loading: true}
        case CURRENT_VIEW:
            return{currentView: payload, loading: false}
        default: 
        return{
            ...state
        }
    }

}