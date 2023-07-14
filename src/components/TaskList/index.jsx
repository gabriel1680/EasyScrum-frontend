import { useState } from 'react';
import PropTypes from 'prop-types'
import { toast } from 'react-toastify';

import './style.css';
import Modal from '../Modal';
import TaskCard from '../TaskCard';
import UpdateTaskForm from '../UpdateTaskForm';

function TaskList({ tasks, onTaskClick }) {
    return (
        <div className='task-list'>
            {
                tasks.length > 0 ?
                tasks.map((task, index) => <TaskCard key={index} task={task} onClick={onTaskClick} />) :
                <p>Nenhuma tarefa cadastrada nessa categoria</p>
            }
        </div>
    );
}

TaskList.propType = {
    task: PropTypes.array,
    onTaskUpdate: PropTypes.func
};

export default TaskList;

