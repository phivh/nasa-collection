function search(state = '', action) {
    switch (action.type) {
        case 'SEARCH':
            return action.text;
        default:
            return state;
    }

}

export default search;
