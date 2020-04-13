import {
    GET_WEATHERINFO,
    
} from '../actions/types';

const initialState = {
    cities:[{name:'Sunnyvale'},{name:'London'},{name:'Seattle'}],
    weatherDetails:{coord:{},weather:[{}],main:{},wind:{},name:null}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_WEATHERINFO:
            return {
                ...state,
                weatherDetails:action.payload
            }
        default:
            return state;
    }

}
