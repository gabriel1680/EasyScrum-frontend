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
    const [showModal, setShowModal] = useState(false);

    const { sprints, isLoading, error } = useGetSprints();

    const notifyError = () => toast.error('Parece que algo deu errado ao carregar os dados');

    useEffect(() => {
        if (!isLoading && error !== null) {
            notifyError();
            console.error(error);
        }
    }, [error]);

    function handleCreateSprint() {
        // TODO: Adicionar a lógica de criar uma sprint
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
                <CreateSprintForm onSubmit={handleCreateSprint} />
            </Modal>
            }
        </> 
    );
}

export default Home;
