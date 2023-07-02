import { toast } from 'react-toastify';
import { useEffect } from 'react';

import './style.css';
import useGetSprints from './useGetSprints';
import SprintList from '../../components/SprintList';
import LoadingSpinner from '../../components/LoadingSpinner';

function Home() {
    const { sprints, isLoading, error } = useGetSprints();

    const notifyError = () => toast.error('Parece que algo deu errado ao carregar os dados');

    useEffect(() => {
        if (!isLoading && error !== null) {
            notifyError();
            console.error(error);
        }
    }, [error]);

    return (
        <>
            <h1 style={{ marginBottom: '24px' }}>Sprints</h1>
            {isLoading && <LoadingSpinner />}
            <SprintList sprints={sprints}/>
        </> 
    );
}

export default Home;
