function data(state = [], action) {
    switch (action.type) {
        case 'FETCHING':
            return [];
        case 'FETCHED':
            let filtered = [...action.data.data.collection.items].map((item) => {
                let reduceItem = {};
                let thumb = '/images/default.png';
                reduceItem.data = item.data[0];
                reduceItem.file = item.href;
                //reduceItem.hits = item.metadata['total_hits'];

                if (!item.links[0].href.includes('image_not_available')) {
                    thumb = `${item.links[0].href}`;
                }

                reduceItem.thumb = thumb;

                return reduceItem;
            });
            return filtered;
        default:
            return state;
    }
}

export default data;
