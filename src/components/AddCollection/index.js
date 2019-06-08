import React, {Component} from 'react';
import PropTypes from 'prop-types';
import fontawesome from '@fortawesome/fontawesome'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck, faChevronDown, faTimes} from '@fortawesome/fontawesome-free-solid'
//import '../../scss/components/modal.scss';

fontawesome
    .library
    .add({faCheck, faChevronDown, faTimes});

class AddCollection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: JSON.parse(localStorage.getItem("data"))
                ? JSON.parse(localStorage.getItem("data"))
                : [],
            id: this.props.selectedItem.data.nasa_id,
            title: this.props.selectedItem.data.title,
            location: this.props.selectedItem.data.location
                ? this.props.selectedItem.data.location
                : '',
            date: this.props.selectedItem.data.date_created,
            description: this.props.selectedItem.data.description,
            media_type: this.props.selectedItem.data.media_type,
            favorite: this.props.selectedItem.favorite
                ? this.props.selectedItem.favorite
                : false,
            thumb: this.props.selectedItem.thumb,
            fileUrl: this.props.selectedItem.fileUrl ? this.props.selectedItem.fileUrl : ''
        }
        this.handleSubmit = this
            .handleSubmit
            .bind(this)
        this.handleChange = this
            .handleChange
            .bind(this)
        this.handleClose = this
            .handleClose
            .bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();

        if (this.state.data.some(item => {
            return item.data.nasa_id === this.state.id
        }) && this.props.location.pathname.indexOf('edit') > -1) {
            let updateDataLocal = this
                .state
                .data
                .map(itemLocal => {
                    if (itemLocal.data.nasa_id === this.state.id) {
                        itemLocal = {
                            data: {
                                nasa_id: this.state.id,
                                title: this.state.title,
                                location: this.state.location,
                                date_created: this.state.date,
                                description: this.state.description,
                                media_type: this.state.media_type
                            },
                            favorite: this.state.favorite,
                            thumb: this.state.thumb,
                            fileUrl: this.state.fileUrl
                        }
                    }
                    return itemLocal;
                })
            //console.log(updateDataLocal);
            localStorage.setItem('data', JSON.stringify(updateDataLocal));
        } else {
            const item = {
                data: {
                    nasa_id: this.state.id,
                    title: this.state.title,
                    location: this.state.location,
                    date_created: this.state.date,
                    description: this.state.description,
                    media_type: this.state.media_type
                },
                favorite: this.state.favorite,
                thumb: this.state.thumb,
                fileUrl: this.state.fileUrl
                    ? this.state.fileUrl
                    : this.state.thumb
            }
            if (!this.state.data.some(item => {
                return item.data.nasa_id === this.state.id
            }) && this.props.location.pathname.indexOf('add') > -1) {
                this
                .state
                .data
                .push(item);
            }
            
            localStorage.setItem('data', JSON.stringify(this.state.data));
        }

        this
            .props
            .history
            .push('/');
        this
            .props
            .refesh()
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleClose() {
        this
            .props
            .history
            .goBack();
    }
    componentDidMount() {
        if (this.props.selectedItem.file) {
            fetch(this.props.selectedItem.file).then((response) => response.json()).then((responseJson) => {
                let videoUrl = responseJson.find(item => item.indexOf('mp4') > -1)

                this.setState({fileUrl: videoUrl})
            }).catch((error) => {
                console.error(error);
            });
        }
    }
    render() {

        const fileUrl = this.state.fileUrl && this.state.fileUrl.length > 0
            ? this.state.fileUrl
            : this.props.selectedItem.thumb
        return (
            <div className="modal">
                <div className="modal__container">
                    <div className="modal__content">
                        <h2>
                            {this
                                .props
                                .location
                                .pathname
                                .indexOf('add') > -1 && ('Add to collection')}
                            {this
                                .props
                                .location
                                .pathname
                                .indexOf('edit') > -1 && ('Edit')}
                            <button onClick={this.handleClose}>
                                <FontAwesomeIcon icon="times" size="lg"/>
                            </button>
                        </h2>
                        <form onSubmit={this.handleSubmit} ref="form">

                            <div className="para-item">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    value={this.state.title}
                                    onChange={this.handleChange}
                                    name="title"
                                    id="title"/>
                            </div>
                            <div className="para-item">
                                <label htmlFor="desc">Description</label>
                                <textarea
                                    value={this.state.description}
                                    name="description"
                                    onChange={this.handleChange}
                                    id="desc"></textarea>
                            </div>
                            <div className="para-item select">
                                <label htmlFor="type">Type</label>
                                <select name="type" id="media_type" onChange={this.handleChange}>
                                    <option value={this.state.media_type}>
                                        {this.state.media_type}
                                    </option>
                                </select>
                                <FontAwesomeIcon icon="chevron-down" size="lg"/>
                            </div>
                            <div className="para-item">
                                <label htmlFor="type">Link preview image url
                                    <i>*</i>
                                </label>
                                <input
                                    name="thumb"
                                    type="text"
                                    value={this.state.thumb}
                                    onChange={this.handleChange}
                                    id="thumbUrl"/>
                            </div>
                            <div className="para-item">
                                <label htmlFor="type">Link file url
                                    <i>*</i>
                                </label>
                                <input
                                    name="file"
                                    type="text"
                                    value={fileUrl}
                                    onChange={this.handleChange}
                                    id="thumbUrl"/>
                            </div>
                            <button className="button-checked">
                                <FontAwesomeIcon icon="check" size="lg"/> {this
                                    .props
                                    .location
                                    .pathname
                                    .indexOf('add') > -1 && ('Add to collection')}
                                {this
                                    .props
                                    .location
                                    .pathname
                                    .indexOf('edit') > -1 && ('Update Colection')}
                            </button>
                        </form>
                    </div>
                </div>
                <div className="modal__overlay"></div>
            </div>
        )
    }
}

AddCollection.propTypes = {
    selectedItem: PropTypes.object,
    refesh: PropTypes.func,
    location: PropTypes.object
}

export default AddCollection