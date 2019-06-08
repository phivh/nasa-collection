function fetching(state = false, action) {
    switch (action.type) {
        case 'FETCHING':
            return false;
        case 'FETCHED':
            return false;
        default:
            return state;
    }

}

export default fetching;
