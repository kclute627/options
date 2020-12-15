import {CURRENT_VIEW, CURRENT_VIEW_REQUEST} from '../constants/dashboardConstants';



export const switchScreen = (newView) => dispatch => {
    dispatch({
        type: CURRENT_VIEW_REQUEST
    })
    
    dispatch({
        type: CURRENT_VIEW,
        payload: newView,
        
    })
}