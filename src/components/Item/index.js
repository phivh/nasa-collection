import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import fontawesome from '@fortawesome/fontawesome'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart, faTrash, faEdit, faPlus, faPlay} from '@fortawesome/fontawesome-free-solid'
import '../../scss/components/item.scss';
fontawesome
    .library
    .add(faHeart, faTrash, faEdit, faPlus, faPlay);

class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: JSON.parse(localStorage.getItem('data'))
        }
    
        this.onAddCollection = this.onAddCollection.bind(this)
        this.onAddFavorite = this.onAddFavorite.bind(this)
        this.onDelete = this.onDelete.bind(this)
        this.onEdit = this.onEdit.bind(this)
      }
    onAddCollection() {
        this.props.history.push(`/add/${this.props.id}`)
    }
    onAddFavorite() {
        if (this.state.data.some(item => {
            return item.data.nasa_id === this.props.id
        })) {
            let updateDataLocal = this.state.data.map((itemLocal, i) => {
                if(itemLocal.data.nasa_id === this.props.id) {
                    if(itemLocal.favorite) {
                        itemLocal.favorite = false;
                    } else {
                        itemLocal.favorite = true;
                    }
                    
                }
                return itemLocal;
            });
            localStorage.setItem('data', JSON.stringify(updateDataLocal));
            this.props.refresh()
        }
    }
    onDelete() {
        if (this.state.data.some(item => {
            return item.data.nasa_id === this.props.id
        })) {
            this.state.data.forEach((itemLocal, i) => {
                if(itemLocal.data.nasa_id === this.props.id) {
                    this.state.data.splice(i, 1)
                }
            });
            localStorage.setItem('data', JSON.stringify(this.state.data));
            this.props.refresh()
        }
    }
    onEdit() {
        this.props.history.push(`/edit/${this.props.id}`)
    }
    render() {
        const isCurrentPage = this.props.history.location.pathname.indexOf('search') > -1; 
       
        return (
            <article className="item">
                <Link
                    to={{
                    pathname: `detail/${this.props.id}`
                }}>
                    {this.props.media_type === 'video' && (
                        <span className="button-play"><FontAwesomeIcon icon="play" size="lg"/></span>
                    )}
                    <img src={this.props.thumb} className="img-responsive" alt=""/>
                </Link>
                <div className="author">
                    <span>{this.props.location}</span>
                    <span><Moment format="DD MMM, YYYY">{this.props.date}</Moment></span>
                </div>
                <h3>{this.props.title}</h3>
                <div className="description">
                {this.props.description}
                </div>
                { isCurrentPage ? (
                    <button onClick={this.onAddCollection} className="button button-add">
                        <FontAwesomeIcon icon="plus" size="lg" />
                        <span>Add to NASA Collection</span>
                    </button>
                ) : (
                    <div className="action-list">
                        <button className={this.props.favorite ? 'favorited' : ''}>
                            <FontAwesomeIcon onClick={this.onAddFavorite} icon="heart" size="lg"></FontAwesomeIcon>
                        </button>
                        <button>
                            <FontAwesomeIcon onClick={this.onDelete} icon="trash" size="lg"></FontAwesomeIcon>
                        </button>
                        <button>
                            <FontAwesomeIcon  onClick={this.onEdit} icon="edit" size="lg"></FontAwesomeIcon>
                        </button>
                    </div>
                )}

            </article>
        )
    }
}

Item.propType = {
    id: PropTypes.number,
    thumb: PropTypes.string,
    title: PropTypes.string,
    refresh: PropTypes.func
}

export default Item;