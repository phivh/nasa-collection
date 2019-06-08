import React, {Component} from 'react'
import PropTypes from 'prop-types';
import List from '../../components/List'
import Header from '../../components/Header'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
            filters: [
                {
                    key: 'type',
                    name: 'Type'
                }, {
                    key: 'date',
                    name: 'Date'
                }, {
                    key: 'favorite',
                    name: 'Favorite'
                }
            ]
        }
        this.handleFilterChange = this
            .handleFilterChange
            .bind(this)
    }
    componentDidMount() {
        this
            .props
            .firstFetch();
    }
    handleFilterChange(event) {
        let val = event.target.value
        switch (val) {
            case '':
                return this.setState({data: this.props.data});
            case 'favorite':
                let updatedList = this.props.data;
                updatedList = updatedList.filter(function (item) {
                    return item.favorite === true;
                });
                return this.setState({data: updatedList});
            case 'date':

                let updatedListByDate = this.props.data;
                updatedListByDate = updatedListByDate.sort((a, b) => new Date(a.data.date_created) - new Date(b.data.date_created));
                return this.setState({data: updatedListByDate});
            default:
                return this.props.data;
        }
    }
    render() {
        let data = this.props.data;
        if (this.state.data.length > 0 && this.state.data.length < this.props.data.length) {
            data = this.state.data;
        }
        const {history, firstFetch} = this.props;
        return (
            <section className="wrap-container">
                <Header/>
                <div className="filters">
                    <h3>Filter:</h3>
                    <select onChange={this.handleFilterChange} name="filter">
                        <option value="">All</option>
                        {this
                            .state
                            .filters
                            .map((filter, i) => {
                                return (
                                    <option value={filter.key} key={i}>
                                        {filter.name}
                                    </option>
                                )
                            })}
                    </select>
                </div>
                <List {...{data, history, firstFetch}}/>
            </section>

        )
    }
}

Home.propTypes = {
    firstFetch: PropTypes.func
}

export default Home;