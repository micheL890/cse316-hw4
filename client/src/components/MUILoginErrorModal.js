import { useContext } from 'react'
import GlobalStoreContext from '../store';


import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Alert from '@mui/material/Alert';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MUILoginErrorModal() {
    const { store } = useContext(GlobalStoreContext);
    function handleCloseModal() {
        store.hideModals();
    }

    return (
        <Modal
            open={store.isLoginErrorModalOpen()}
        >
            <Box sx={style}>
            <Alert severity="error">This is an error alert!</Alert>
                <div className="modal-dialog">
                <header className="dialog-header">
                    Error: Wrong email or password provided
                </header>
                <div id="confirm-cancel-container">
                    <button
                        id="dialog-no-button"
                        className="modal-button"
                        onClick={handleCloseModal}
                    >Ok</button>
                </div>
            </div>
            </Box>
        </Modal>
    );
}