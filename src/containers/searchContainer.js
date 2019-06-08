import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {search} from '../actions/search';
import PaginationHelper from '../model/paginationHelper';
//import defaultStore from '../model/initialState';
import Search from '../pages/Search'

const pg = new PaginationHelper();

function mapStateToProps(store) {
    return {
        fetching: store.fetching,
        search: store.search, 
        pagination: Object.assign({},
            store.pagination, {
                pages: pg.getPages(store.pagination),
                hits: store.pagination.hits,
                next: pg.hasNext(store.pagination),
                prev: pg.hasPrev(store.pagination)
            }
        ),
        data: store.data};
}

function getQueryString(search) {
    return search
        ? `?q=${search}`
        : '';
}

const mapDispatchToProps = (dispatch, store) => {
    return {

        searchAction: (val, props) => {
            props
                .history
                .push(`${getQueryString(val)}`);

            dispatch(search(val));
        },

        searchClear: (val) => {
            dispatch(search(val));
        },

        filterAction: (val, props) => {}
    };
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
