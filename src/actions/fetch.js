// import pagination from './pagination'; import fetchingError from
// './fetchingError';

export function fetchedLocal(data) {
    return {type: 'FETCHED_LOCAL', data};
}

export function fetch() {
    return function(dispatch, getState) {
        let data = JSON.parse(localStorage.getItem('data'));
        
        if(!data) {
            data = []
        }
        
        dispatch(fetchedLocal(data));
    }
}