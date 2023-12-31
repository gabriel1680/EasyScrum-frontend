import React, { useState } from 'react';
import PropTypes from 'prop-types'

import './style.css';
import Button from '../Button';
import { api } from '../../services/api';
import TaskForm from '../TaskForm';

function CreateTaskForm({ onSuccess, onError, sprintId }) {
    const [isLoading, setIsLoading] = useState(false);

    async function onSubmit(task) {
        try {
            setIsLoading(true);
            const payload = createFormDataWithFields(task);
            const { data } = await api.post(`/sprints/${sprintId}/tasks`, payload);
            onSuccess(data);
        } catch (error) {
            onError(error.response);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <h3>Nova tarefa</h3>
            <TaskForm onSubmit={onSubmit}>
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

CreateTaskForm.propType = {
    onSuccess: PropTypes.func,
    onError: PropTypes.func,
    sprintId: PropTypes.number
};

export default CreateTaskForm;

