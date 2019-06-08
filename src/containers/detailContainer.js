import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import Detail from '../pages/Detail';
import {createSelector} from 'reselect';

const getItem = (state, props) => {
    return state.find((item, i) => item.data.nasa_id === props.match.params.id);
}

const getSelectedItem = createSelector([getItem], (item, props) => item)

const mapStateToProps = (state, props) => {
    let data;
    if(state.pagination.hits > 0) {
        data = state.data
    } else {
        data = state.local
    }
    return {
        selectedItem: getSelectedItem(data, props)
    }
}


export default withRouter(connect(mapStateToProps, null)(Detail));
