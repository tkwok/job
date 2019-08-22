import axios from 'axios';

import {
    FETCH_JOBS
} from './types';

export const fetchJobs = () => async (dispatch) => {
    dispatch({ type: FETCH_JOBS, payload: null });
};
