import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';

import './style.css';
import Button from '../../components/Button';
import LoadingSpinner from '../../components/LoadingSpinner';
import Modal from '../../components/Modal';
import CreateTaskForm from '../../components/CreateTaskForm';
import UpdateTaskForm from '../../components/UpdateTaskForm';
import TaskList from '../../components/TaskList';
import useGetSprint from '../../hooks/useGetSprint';
import useGetTasks from '../../hooks/useGetTasks';
import useTaskUpdateForm from '../../hooks/useTaskUpdateForm';
import useCreateTaskForm from '../../hooks/useCreateTaskForm';

function TasksView() {
    const { sprintId } = useParams();

    const [refetch, setRefetch] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const [showEditTaskModal, setShowEditTaskModal] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

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

    function onTaskCreate() {
        setRefetch(prev => prev += 1);
        setShowModal(false);
    }

    const { 
        onCreateTaskError, 
        onCreateTaskSuccess 
    } = useCreateTaskForm({ onTaskCreate });

    function onTaskUpdate() {
        setRefetch(prev => prev += 1);
        setShowEditTaskModal(false);
    }

    const { 
        onDeleteSuccess,
        onUpdateFailure,
        onUpdateSuccess, 
        onDeleteFailure
    } = useTaskUpdateForm({ onTaskUpdate });

    function onTaskClick(task) {
        setSelectedTask(task);
        setShowEditTaskModal(true);
    }

    const TASK_LIST_CONFIG = [
        {
            title: 'Backlog',
            style: 'backlog',
            tasks: backlogTasks
        },
        {
            title: 'Em andamento',
            style: 'in-progress',
            tasks: inProgressTasks
        },
        {
            title: 'Aguardando revisão',
            style: 'revision',
            tasks: revisionTasks
        },
        {
            title: 'Concluído',
            style: 'done',
            tasks: doneTasks
        }
    ];

    return (
        <>
            {/* Return link */}
            <div className='back-link'><a href='/'>&#x2190; Voltar</a></div>

            {/* Sprint Info */}
            <div className='sprint-list-header'>
                <h1>{isSprintLoading ? <LoadingSpinner /> : sprint.name} - Tarefas</h1>
                <Button text='+ Nova tarefa' variant='primary' onClick={() => setShowModal(true)}/>
            </div>

            {/* Tasks Lists */}
            <div className='tasks-container'>
                {TASK_LIST_CONFIG.map(config => (
                    <div className='tasks-section-container'>
                        <h2 className={config.style}>{config.title}</h2>
                        {isTasksLoading && <LoadingSpinner />}
                        <TaskList onTaskClick={onTaskClick} tasks={config.tasks} />
                    </div> 
                ))}
            </div>

            {/* Create Task Modal */}
            {showModal && <Modal onClose={() => setShowModal(false)}>
                <CreateTaskForm onError={onCreateTaskError} onSuccess={onCreateTaskSuccess} sprintId={sprintId} />
            </Modal>}

            {/* Update Task Modal */}
            {showEditTaskModal &&
                <Modal onClose={() => setShowEditTaskModal(false)}>
                    <UpdateTaskForm 
                        onUpdateError={onUpdateFailure} 
                        onUpdateSuccess={onUpdateSuccess} 
                        onDeleteError={onDeleteFailure}
                        onDeleteSuccess={onDeleteSuccess}
                        task={selectedTask}
                    />
                </Modal>}
        </> 
    );
}

export default TasksView;

