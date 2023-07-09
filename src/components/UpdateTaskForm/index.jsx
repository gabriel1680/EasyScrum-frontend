import React, { useState } from 'react';
import PropTypes from 'prop-types'

import './style.css';
import Button from '../Button';
import { api } from '../../services/api';
import TaskForm from '../TaskForm';

/**
 * Renderiza o form de atualização de uma task
 */
function UpdateTaskForm({ onUpdateSuccess, onUpdateError, onDeleteError, onDeleteSuccess, task }) {
    const [isLoading, setIsLoading] = useState(false);

    async function onSubmit(taskData) {
        try {
            setIsLoading(true);
            const payload = createFormDataWithFields(taskData);
            const { data } = await api.put(`/sprints/${task.sprint_id}/tasks/${task.id}`, payload);
            onUpdateSuccess(data);
        } catch (error) {
            onUpdateError(error.response);
        } finally {
            setIsLoading(false);
        }
    }

    async function onDelete() {
        try {
            setIsLoading(true);
            await api.delete(`/sprints/${task.sprint_id}/tasks/${task.id}`);
            onDeleteSuccess();
        } catch (error) {
            onDeleteError(error.response);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <h3>Tarefa - {task.title}</h3>
            <TaskForm onSubmit={onSubmit} task={task}>
                <Button text='Excluir' variant='error' isLoading={isLoading} type='button' onClick={onDelete} />
                <Button text='Salvar' variant='primary' isLoading={isLoading} type='submit'/>
            </TaskForm>
        </>
    );

    function createFormDataWithFields({ title, status, story, dueDate }) {
        const form = new FormData();
        form.append('title', title);
        form.append('status', status);
        form.append('story', story);
        form.append('due_date', dueDate);
        return form;
    } 
}

UpdateTaskForm.propType = {
    onSuccess: PropTypes.func,
    onError: PropTypes.func,
    task: PropTypes.object
};

export default UpdateTaskForm;

