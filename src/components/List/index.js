import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import '../../scss/components/list.scss';

class List extends Component {
    sliceDesc(string) {
        return string && string.length > 100
            ? string.substring(0, 100) + '...'
            : string;
    }
    render() {
        const history = this.props.history;
        const refresh = this.props.firstFetch;
        return (
            <section className="nasa-list">
                {
                    this.props.data.map((item, index) => {
                        let data = item.data ? item.data : item,
                            thumb = item.thumb,
                            favorite = item.favorite ? true : false,
                            desc = this.sliceDesc(data.description);
                        return <Item
                            id={data.nasa_id}
                            title={data.title}
                            location={data.location}
                            date={data.date_created}
                            description={desc}
                            thumb={thumb}
                            media_type={data.media_type}
                            history={history}
                            refresh={refresh}
                            favorite={favorite}
                            key={index}/>
                    })
}
            </section>
        )
    }
}

List.propTypes = {
    data: PropTypes.array
}

export default List;