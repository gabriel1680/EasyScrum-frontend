import React, { useState } from 'react';
import PropTypes from 'prop-types'

import './style.css';
import Button from '../Button';
import { api } from '../../services/api';

function CreateTaskForm({ onSuccess, onError, sprintId }) {
    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('');
    const [story, setStory] = useState('');
    const [dueDate, setDueDate] = useState('');

    async function onSubmit(e) {
        try {
            e.preventDefault();
            setIsLoading(true);
            const payload = createFormDataWithFields();
            const { data } = await api.post(`/sprints/${sprintId}/tasks`, payload);
            onSuccess(data);
        } catch (error) {
            onError(error.response);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form className='create-task-form' onSubmit={onSubmit}>
            <h3>Nova tarefa</h3>
            <label htmlFor='title'>Título</label>
            <input name='title' type='text' required value={title} onChange={e => setTitle(e.target.value)}/>       
            <label htmlFor='status'>Status</label>
            <select name='status' type='text' required value={status} onChange={e => setStatus(e.target.value)}>
                <option value='backlog'>Backlog</option>
                <option value='in progress'>Em andamento</option>
                <option value='revision'>Em Revisão</option>
                <option value='done'>Concluído</option>
            </select>       
            <label htmlFor='story'>User Story</label>
            <textarea name='story' type='text' required value={story} onChange={e => setStory(e.target.value)}></textarea>
            <label htmlFor='dueDate'>Termina em</label>
            <input name='dueDate' type='datetime-local' required value={dueDate} onChange={e => setDueDate(e.target.value)}/>       
            <Button text='Salvar' variant='primary' isLoading={isLoading} type='submit'/>
        </form>
    );
        
    function createFormDataWithFields() {
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

