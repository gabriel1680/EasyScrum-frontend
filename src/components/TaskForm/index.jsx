import React, { useState } from 'react';

/**
 * Renderiza o form de uma task
 */
function TaskForm({ onSubmit, task = {}, children }) {
    const [title, setTitle] = useState(task.title || '');
    const [status, setStatus] = useState(task.status || '');
    const [story, setStory] = useState(task.story || '');
    const [dueDate, setDueDate] = useState(task.due_date || '');

    function handleFormSubmit(e) {
        e.preventDefault();
        onSubmit({ title, status, story, dueDate });
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor='title'>Título</label>
            <input name='title' type='text' required value={title} onChange={e => setTitle(e.target.value)}/>       
            <label htmlFor='status'>Status</label>
            <select name='status' type='text' required value={status} onChange={e => setStatus(e.target.value)}>
                <option value='' disabled>-- Selecione uma opção --</option>
                <option value='backlog'>Backlog</option>
                <option value='in progress'>Em andamento</option>
                <option value='revision'>Em Revisão</option>
                <option value='done'>Concluído</option>
            </select>       
            <label htmlFor='story'>User Story</label>
            <textarea name='story' type='text' required value={story} onChange={e => setStory(e.target.value)}></textarea>
            <label htmlFor='dueDate'>Termina em</label>
            <input name='dueDate' type='datetime-local' required value={dueDate} onChange={e => setDueDate(e.target.value)}/>       
            <div className='buttons'>
                {children}
            </div>
        </form>
    );
}

export default TaskForm;

