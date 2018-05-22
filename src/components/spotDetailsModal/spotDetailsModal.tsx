import * as React from 'react';
import * as ReactModal from 'react-modal';
import { Dispatch } from 'redux';
import { IAppState, ISpot } from '../../types';

import './spotDetailsModal.css';

interface ISpotDetailsModalProps {
    isOpen: boolean;
    onRequestClose: () => Dispatch<IAppState>;
    spot: ISpot | null;
}

const SpotDetailsModal = (props: ISpotDetailsModalProps) => {
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