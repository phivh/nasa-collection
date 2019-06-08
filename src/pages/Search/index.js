import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BackButton from '../../components/BackButton'
import List from '../../components/List'
import '/scss/pages/search.scss'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: props.search
        }
    }
    componentDidMount() {
        this.form.onsubmit = (evt) => {
            evt.preventDefault();
            this
                .props
                .searchAction(this.state.search, this.props);
        }
    }
    onSearchClear() {
        this
            .props
            .searchClear('');
        this.setState({search: this.props.search});
    }
    onBackButtonClick() {
        this
            .props
            .history
            .push('/');
    }
    onTextChange(evt) {
        const search = evt.currentTarget.value;
        this.setState({ search: search });
    }
    render() {
        const {data, history, pagination} = this.props
        return (
            <section ref={(c) => this.search = c} className="search-page">
                <section className="wrap-container">
                    <BackButton
                        onClick={this
                        .onBackButtonClick
                        .bind(this)}/>
                    <h1>Search from Nasa</h1>
                    <form ref={(c) => this.form = c} action="/" method="get">
                        <input
                            ref={(c) => this.searchInput = c}
                            id="search"
                            type="text"
                            value={this.state.search}
                            onChange={this.onTextChange.bind(this)}
                            name="search"
                            placeholder="Type something to search"/>
                    </form>
                    {pagination.hits > 0 && this.state.search.length > 0 && (
                    <div className="txt-result">
                        {pagination.hits} result for "{this.state.search}"
                    </div>
                    )}
                    <List {...{data,history}} />
                </section>
            </section>
        )
    }
}

Search.propTypes = {
    searchAction: PropTypes.func,
    searchClear: PropTypes.func,
    search: PropTypes.string
}
export default Search;