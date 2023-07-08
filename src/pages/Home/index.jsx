import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

import './style.css';
import Button from '../../components/Button';
import useGetSprints from './useGetSprints';
import SprintList from '../../components/SprintList';
import LoadingSpinner from '../../components/LoadingSpinner';
import CreateSprintForm from '../../components/CreateSprintForm';
import Modal from '../../components/Modal';

function Home() {
    const [refetch, setRefetch] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const { sprints, isLoading, error } = useGetSprints(refetch);

    useEffect(() => {
        if (!isLoading && error !== null) {
            toast.error('Parece que algo deu errado ao carregar os dados');
            console.error(error);
        }
    }, [error]);

    function onCreateSprintSuccess() {
        toast.success('Sprint criada com sucesso!');
        setShowModal(false);
        setRefetch(prev => prev += 1);
    }

    function onCreateSprintError(error) {
        if (error.status !== 400) {
            toast.error('Parece que houve um erro ao cadastrar a sprint');
        } else {
            toast.error(error.data.message);
        }
        console.error(error);
    }

    return (
        <>
            <div className='sprint-list-header'>
                <h1>Sprints</h1>
                <Button text='+ Nova sprint' variant='primary' onClick={() => setShowModal(true)}/>
            </div>
            {isLoading && <LoadingSpinner />}
            <SprintList sprints={sprints}/>
            {showModal && <Modal onClose={() => setShowModal(false)}>
                <CreateSprintForm onError={onCreateSprintError} onSuccess={onCreateSprintSuccess} />
            </Modal>}
        </> 
    );
}

export default Home;
