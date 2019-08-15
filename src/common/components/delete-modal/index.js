import React from 'react';
import {Button, Modal} from 'semantic-ui-react'

const DeleteModal = ({size, open, close,handleConfirmDelete}) => {
    return (
        <Modal size={size} open={open} onClose={close}>
            <Modal.Header>Delete</Modal.Header>
            <Modal.Content>
                <p>Are you sure you want to delete this</p>
            </Modal.Content>
            <Modal.Actions>
                <Button negative onClick={close}>No</Button>
                <Button positive icon='checkmark'
                        labelPosition='right'
                        onClick={handleConfirmDelete}
                        content='Yes'/>
            </Modal.Actions>
        </Modal>
    );
};

export default DeleteModal;
