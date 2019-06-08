import React, {Component} from 'react'
import PropTypes from 'prop-types'
import fontawesome from '@fortawesome/fontawesome'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from '@fortawesome/fontawesome-free-solid'
import '../../scss/pages/detail.scss'

fontawesome
    .library
    .add(faTimes)

class Detail extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            fileUrl: '',
        };
    }
    componentDidMount() {
        if(this.props.selectedItem.file) {
            fetch(this.props.selectedItem.file)
            .then((response) => response.json())
            .then((responseJson) => {
                let videoUrl = responseJson.find(item => item.indexOf('mp4') > -1)
                
                this.setState({
                    fileUrl: videoUrl
                })
            })
            .catch((error) => {
                console.error(error);
            });
        }
    }
    shouldComponentUpdate() {
        return true;
      }
    onClose() {
        this
            .props
            .history
            .goBack();
    }
    render() {
        console.log(this.props.selectedItem);
        const isVideo = (this.props.selectedItem.data.media_type === 'video');
        const fileUrl = this.state.fileUrl ? this.state.fileUrl : this.props.selectedItem.fileUrl;
        const Video = () => (<video controls autoPlay><source src={fileUrl} type="video/mp4"/></video>)
        
        return (
            <section className="detail-page">
                <section className="wrap-container">
                    <div className="page-header">
                        <h1>{this.props.selectedItem.data.title}</h1>
                        <button
                            onClick={this
                                .onClose
                                .bind(this)}>
                            <FontAwesomeIcon icon="times" size="lg"/>
                        </button>
                    </div>
                    <div className="detail__content">
                        {isVideo ? (
                            <Video />
                        ):(
                            <img width="100%" src={this.props.selectedItem.thumb} alt={this.props.selectedItem.data.title} />
                        )}
                        
                    </div>
                </section>
            </section>
        )
    }
}

Detail.propTypes = {
    selectedItem: PropTypes.object,
    history: PropTypes.object
}

export default Detail;