import pagination from './pagination';
export default function filter(text) {
    return {type: 'SEARCH', text};
}
export function fetched(data) {
    return {type: 'FETCHED', data};
}

export function search(options) {
    return function (dispatch, getState, api) {
        return api
            .get(options)
            .then((data) => {
                dispatch(fetched(data));
                const limit = 100;
                const total = data.data.collection.metadata.total_hits;
                const pages = Math.round(total / limit);
                if (getState().pagination.total !== pages) {
                    const current = options.page > pages
                        ? 1
                        : options.page;
                    const pg = Object.assign({}, getState().pagination, {current, total: pages, hits:total});
                    dispatch(pagination(pg));
                }

            }, (reject) => {
                dispatch(reject);

            })
            .catch(function (reason) {
                dispatch(reason);
            })
    };
}
