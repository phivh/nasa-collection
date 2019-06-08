function local(state = [], action) {
    switch (action.type) {
        case 'FETCHED_LOCAL':
            let initItems = action.data;
            return initItems;
        default:
            return state;
    }

}

export default local;
