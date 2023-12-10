import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

import './style.css';
import Button from '../../components/Button';
import SprintList from '../../components/SprintList';
import LoadingSpinner from '../../components/LoadingSpinner';
import CreateSprintForm from '../../components/CreateSprintForm';
import Modal from '../../components/Modal';
import useGetSprints from '../../hooks/useGetSprints';
import useCreateSprint from '../../hooks/useCreateSprint';

function Home() {
    const navigate = useNavigate();
    const { createSprint, isLoading: isCreateSprintLoading } = useCreateSprint();
    const [refetch, setRefetch] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const { sprints, isLoading, error } = useGetSprints(refetch);

    useEffect(() => {
        if (!isLoading && error !== null) {
            toast.error('Parece que algo deu errado ao carregar os dados');
            console.error(error);
        }
    }, [error]);

    async function onSubmitSprint(sprint) {
        const response = await createSprint(sprint);
        response.isError ? onCreateSprintError(response) : onCreateSprintSuccess();
    }

    function onCreateSprintSuccess() {
        toast.success('Sprint criada com sucesso!');
        setShowModal(false);
        setRefetch(prev => (prev += 1));
    }

    function onCreateSprintError(error) {
        console.error(error);
        const message =
            error.status !== 400 ? 'Parece que houve um erro ao cadastrar a sprint' : error.message;
            console.log(message);
        toast.error(message);
    }

    function onCardClick(sprint) {
        navigate(`/${sprint.id}/tasks`);
    }

    return (
        <>
            <div className="sprint-list-header">
                <h1>Sprints</h1>
                <Button text="+ Nova sprint" variant="primary" onClick={() => setShowModal(true)} />
            </div>
            {isLoading && <LoadingSpinner size={40} />}
            <SprintList sprints={sprints} onCardClick={onCardClick} />
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateSprintForm isLoading={isCreateSprintLoading} onSubmit={onSubmitSprint} />
                </Modal>
            )}
        </>
    );
}

export default Home;
