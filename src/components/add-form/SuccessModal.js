import React from 'react';
import Modal from 'react-modal/lib/components/Modal';
import './successModal.css';
import success from '../../assets/success.png'
import { Link } from 'react-router-dom';
const SuccessModal = ({modalOpen,isUpdate}) => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            
        },
    }
    return (
        <Modal
            isOpen={modalOpen}
            // onAfterOpen={afterOpenModal}
            // onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className='modal-inner'>
                <div className='img-cont'>
                    <img src={success} alt='success' />
                </div>
                <h2>{ isUpdate ? "Expense updated successfully":"Expense added successfully"}</h2>
                <div>
                    <Link to="/">
                    <button className='btn'>Home</button>
                    </Link>
                </div>
            </div>
        </Modal>
    )
}

export default SuccessModal