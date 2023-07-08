import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import './style.css';
import Button from '../../components/Button';
import LoadingSpinner from '../../components/LoadingSpinner';
import { useParams } from 'react-router';
import useGetSprint from './useGetSprint';
import useGetTasks from './useGetTasks';
import Modal from '../../components/Modal';
import CreateTaskForm from '../../components/CreateTaskForm';
import TaskList from '../../components/TaskList';

function TasksView() {
    const { sprintId } = useParams();

    const [refetch, setRefetch] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const { sprint, isLoading: isSprintLoading, error: sprintError } = useGetSprint(sprintId);

    const { tasks, isLoading: isTasksLoading, error: tasksError } = useGetTasks({ refetch, sprintId });

    const doneTasks = getTasksWithStatus('done');
    const inProgressTasks = getTasksWithStatus('in progress');
    const revisionTasks = getTasksWithStatus('revision');
    const backlogTasks = getTasksWithStatus('backlog');

    function getTasksWithStatus(status) {
        return tasks.filter(task => task.status === status);
    }

    useEffect(() => {
        if (!isSprintLoading && sprintError !== null) {
            toast.error('Parece que algo deu errado ao carregar os dados da sprint');
            console.error(sprintError);
        }
    }, [sprintError]);

    useEffect(() => {
        if (!isTasksLoading && tasksError !== null) {
            toast.error('Parece que algo deu errado ao carregar as tarefas');
            console.error(tasksError);
        }
    }, [tasksError]);

    function onCreateTaskSuccess() {
        toast.success('Tarefa criada com sucesso!');
        setShowModal(false);
        setRefetch(prev => prev += 1);
    }

    function onCreateTaskError(error) {
        if (error.status !== 400) {
            toast.error('Parece que houve um erro ao cadastrar a tarefa');
        } else {
            toast.error(error.data.message);
        }
        console.error(error);
    }

    return (
        <>
            <div className='back-link'><a href='/'>&#x2190; Voltar</a></div>
            <div className='sprint-list-header'>
                <h1>{isSprintLoading ? <LoadingSpinner /> : sprint.name} - Tarefas</h1>
                <Button text='+ Nova tarefa' variant='primary' onClick={() => setShowModal(true)}/>
            </div>
            <div className='tasks-container'>
                <div className='tasks-section-container'>
                    <h2 className='backlog'>Backlog</h2>
                    {isTasksLoading && <LoadingSpinner />}
                    <TaskList tasks={backlogTasks} />
                </div> 
                <div className='tasks-section-container'>
                    <h2 className='in-progress'>Em andamanento</h2>
                    {isTasksLoading && <LoadingSpinner />}
                    <TaskList tasks={inProgressTasks} />
                </div> 
                <div className='tasks-section-container'>
                    <h2 className='revision'>Aguardando revisão</h2>
                    {isTasksLoading && <LoadingSpinner />}
                    <TaskList tasks={revisionTasks} />
                </div> 
                <div className='tasks-section-container'>
                    <h2 className='done'>Concluído</h2>
                    {isTasksLoading && <LoadingSpinner />}
                    <TaskList tasks={doneTasks} />
                </div> 
            </div>
            {showModal && <Modal onClose={() => setShowModal(false)}>
                <CreateTaskForm onError={onCreateTaskError} onSuccess={onCreateTaskSuccess} sprintId={sprintId} />
            </Modal>}
        </> 
    );
}

export default TasksView;

