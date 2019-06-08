import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {fetch} from '../actions/fetch';
import PaginationHelper from '../model/paginationHelper';
import Home from '../pages/Home'

const pg = new PaginationHelper();

function mapStateToProps(store) {
    return {
        fetching: store.fetching,
        search: store.search,
        pagination: Object.assign({}, store.pagination, {
            pages: pg.getPages(store.pagination),
            hits: store.pagination.hits,
            next: pg.hasNext(store.pagination),
            prev: pg.hasPrev(store.pagination)
        }),
        data: store.local
    };
}
const mapDispatchToProps = (dispatch, store) => {
    return {
        firstFetch: () => {
            dispatch(fetch());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);