import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import AddCollection from '../components/AddCollection';
import {createSelector} from 'reselect';
import {fetch} from '../actions/fetch';


const getItem = (state, props) => {
    return state.find((item, i) => item.data.nasa_id === props.match.params.id);
}

const getSelectedItem = createSelector([getItem], (item, props) => item)

const mapStateToProps = (state, props) => {
    let data;
    if(props.location.pathname.indexOf('add') > -1) {
        data = state.data
    } else {
        data = state.local
    }
    return {
        selectedItem: getSelectedItem(data, props),
        history: props.history,
        location: props.location
    }
}
const mapDispatchToProps = (dispatch, store) => {
    return {
        refesh: () => {
            dispatch(fetch());
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddCollection));
