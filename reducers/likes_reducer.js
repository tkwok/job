import {
    LIKE_JOB
} from '../actions/types';

export default function(state, action) {
    switch (action.type) {
        case LIKE_JOB:
            // return uniqBy([
            //     action.payload, ...state
            // ], 'jobkey')
            return [...new Set(action.payload.map( x => x.jobkey)), ...state]
        default: 
            return state;
    }
}