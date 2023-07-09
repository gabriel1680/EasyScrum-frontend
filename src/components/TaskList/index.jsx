import { useState } from 'react';
import PropTypes from 'prop-types'
import { toast } from 'react-toastify';

import './style.css';
import Modal from '../Modal';
import TaskCard from '../TaskCard';
import UpdateTaskForm from '../UpdateTaskForm';

function TaskList({ tasks, onTaskUpdate }) {
    const [showTaskModal, setShowTaskModal] = useState(false);
    const [task, setTask] = useState(null);

    function onCardClick(task) {
        setTask(task);
        setShowTaskModal(true);
    }

    function onUpdateSuccess() {
        setShowTaskModal(false);
        toast.success('Tarefa atualizada com sucesso');
        onTaskUpdate();
    }

    function onUpdateFailure(error) {
        const { status } = error;
        if ([400, 422].includes(status)) {
            return toast.error(error.data.message);
        }
        toast.error('Parece que algo deu errado ao atualizar a tarefa');
    }

    function onDeleteSuccess() {
        setShowTaskModal(false);
        toast.success('Tarefa removida com sucesso');
        onTaskUpdate();
    }

    function onDeleteFailure(error) {
        const { status } = error;
        if ([400, 422].includes(status)) {
            return toast.error(error.data.message);
        }
        toast.error('Parece que algo deu errado ao remover a tarefa');
    }

    return (
        <div className='task-list'>
            {
                tasks.length > 0 ?
                tasks.map((task, index) => <TaskCard key={index} task={task} onClick={onCardClick} />) :
                <p>Nenhuma tarefa cadastrada nessa categoria</p>
            }
            {
                showTaskModal &&
                <Modal onClose={() => setShowTaskModal(false)}>
                    <UpdateTaskForm 
                        onUpdateError={onUpdateFailure} 
                        onUpdateSuccess={onUpdateSuccess} 
                        onDeleteError={onDeleteFailure}
                        onDeleteSuccess={onDeleteSuccess}
                        task={task}
                    />
                </Modal>
            }
        </div>
    );
}

TaskList.propType = {
    task: PropTypes.array,
    onTaskUpdate: PropTypes.func
};

export default TaskList;

