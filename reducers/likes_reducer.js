import { REHYDRATE } from 'redux-persist/constants';
import {
    LIKE_JOB,
    CLEAR_LIKED_JOBS
} from '../actions/types';

export default function(state, action) {
    switch (action.type) {
        case LIKE_JOB:
            // return uniqBy([
            //     action.payload, ...state
            // ], 'jobkey')
            return [...new Set(action.payload.map( x => x.jobkey)), 
                ...state]
        case CLEAR_LIKED_JOBS:
            return [];
        case REHYDRATE:
            return action.payload.likedJobs || [];
        default: 
            return state;
    }
}