import React,{Component} from 'react';
import ReactModal from 'react-modal';

import './spotDetailsModal.css';

class SpotDetailsModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <ReactModal
          className="spot-details-modal"
          overlayClassName="spot-details-modal-overlay"
          isOpen={this.props.isOpen}
          shouldCloseOnOverlayClick={true}
          contentLabel="Spot Details"
        >
            <div className="modal-header">
                Spot Details
                <button className="close-button">
                    &#x2715;
                </button>
            </div>
            <div className="modal-body">
                <span className="spot-details-title">
                    {this.props.spot && this.props.spot.title}
                </span>
                <p className="spot-details-description">
                    {this.props.spot && this.props.spot.description}
                </p>
            </div>
        </ReactModal>
        );
    }
}

export default SpotDetailsModal;