import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { Link } from 'react-router-dom';
import './Modal.css'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 7,
    boxShadow: 24,
    pt: 5,
    px: 4,
    pb: 3,
    textAlign: 'center',
    fontFamily: 'Poppins',

};

function ChildModal({ SendData }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <button className='close-btn' onClick={handleClose}>Close </button>
            <button className='open-btn' onClick={handleOpen} >Reserve </button>


            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 390, height: 150 }}>
                    <h2 id="child-modal-title">this Nurse Reserved for you succesfully</h2>
                    <p id="child-modal-description">

                    </p>
                    <Link to='/nurses'>  <button className='back-btn' onClick={handleClose}>Back To Nurses Page</button></Link>
                    <Link to='/'>   <button className='back-btn' onClick={handleClose}>back To Home</button></Link>
                </Box>
            </Modal>
        </React.Fragment>
    );
}

export default function NestedModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button className='openbtn' onClick={handleOpen}>Reserve this Nurse </button>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 390, height: 150 }}>
                    <h2 id="parent-modal-title"> Are you sure to Reserve this Nurse?</h2>
                    <p id="parent-modal-description">

                    </p>
                    <ChildModal />
                </Box>
            </Modal>
        </div>
    );
}