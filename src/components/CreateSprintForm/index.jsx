import React, { useState } from 'react';
import PropTypes from 'prop-types'

import './style.css';
import Button from '../Button';
import { api } from '../../services/api';

function CreateSprintForm({ onSuccess, onError }) {
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState(null);

    async function onSubmit(e) {
        try {
            e.preventDefault();
            setIsLoading(true);
            const payload = createFormDataWithFields();
            const { data } = await api.post('/sprints', payload);
            onSuccess(data);
        } catch (error) {
            onError(error.response);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form className='create-sprint-form' onSubmit={onSubmit}>
            <h3>Nova Sprint</h3>
            <label for='name'>Nome</label>
            <input name='name' type='text' required value={name} onChange={e => setName(e.target.value)}/>       
            <label for='description'>Descrição</label>
            <textarea name='description' type='text' required value={description} onChange={e => setDescription(e.target.value)}></textarea>
            <label for='dueDate'>Termina em</label>
            <input name='dueDate' type='datetime-local' required value={dueDate} onChange={e => setDueDate(e.target.value)}/>       
            <Button text='Salvar' variant='primary' isLoading={isLoading} type='submit'/>
        </form>
    );
        
    function createFormDataWithFields() {
        const form = new FormData();
        form.append('name', name);
        form.append('description', description);
        form.append('due_date', dueDate);
        return form;
    } 
}

CreateSprintForm.propType = {
    onSuccess: PropTypes.func,
    onError: PropTypes.func
};

export default CreateSprintForm

