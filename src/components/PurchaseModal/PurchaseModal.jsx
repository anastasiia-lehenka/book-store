import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

const PurchaseModal = ({ children, onClose }) => (
  <Modal show backdrop="static" keyboard={false} onHide={onClose}>
    <Modal.Header closeButton>
      <Modal.Title>Purchase Successful</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <p className="mb-5">You successfully placed an order!</p>
      {children}
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={onClose}>Close</Button>
    </Modal.Footer>
  </Modal>
);

PurchaseModal.propTypes = {
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default React.memo(PurchaseModal);
