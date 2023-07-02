import React, { useState } from 'react';

import './style.css';
import Button from '../Button';

function CreateSprintForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState(null);

    return (
        <form className='create-sprint-form' onSubmit={onSubmit}>
            <h3>Nova Sprint</h3>
            <label for='name'>Nome</label>
            <input name='name' type='text' required value={name} onChange={e => setName(e.target.value)}/>       
            <label for='description'>Descrição</label>
            <textarea name='description' type='text' required value={description} onChange={e => setDescription(e.target.value)}></textarea>
            <label for='dueDate'>Termina em</label>
            <input name='dueDate' type='datetime-local' required value={dueDate} onChange={e => setDueDate(e.target.value)}/>       
            <Button text='Salvar' variant='primary'/>
        </form>
    );
}

export default CreateSprintForm
