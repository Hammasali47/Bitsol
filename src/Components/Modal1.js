import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

export const ModalDelete = ({buttonLabel, className, id}) => {
    // const queryClient = useQueryClient()
    const navigate = useNavigate()
    const [modal, setModal] = useState(false)
    
    const toggle = () => {
        setModal(!modal)
    }
    const deleteRecord = () => {
        toggle()
        mutation.mutate(id)
    }
    const mutation = useMutation(async recordId => {
        return await fetch(`http://localhost:3004/posts/${recordId}`, {
            method: 'DELETE'
        });
    }, {
        onSuccess: () => {
            // makes react query client to fetch data against this key again,
            // acts like GET call after DELETE call.
            return navigate("/")
        }
    })

    return (
        <div>
            <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    Are you sure you want to delete this record
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={deleteRecord}>Delete</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );

}