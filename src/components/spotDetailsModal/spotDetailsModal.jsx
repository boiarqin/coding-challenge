import React from 'react';
import ReactModal from 'react-modal';

import './spotDetailsModal.css';

ReactModal.setAppElement('#root');

const SpotDetailsModal = (props) => {
    return (
        <ReactModal
          className="spot-details-modal"
          overlayClassName="spot-details-modal-overlay"
          isOpen={props.isOpen}
          onRequestClose={props.onRequestClose}
          shouldCloseOnOverlayClick={true}
          contentLabel="Spot Details"
        >
            <div className="modal-header">
                Spot Details
                <button
                    className="close-button"
                    onClick={props.onRequestClose}
                >
                    &#x2715;
                </button>
            </div>
            <div className="modal-body">
                <span className="spot-details-title">
                    {props.spot && props.spot.title}
                </span>
                <p className="spot-details-description">
                    {props.spot && props.spot.description}
                </p>
            </div>
        </ReactModal>
    );
}

export default SpotDetailsModal;