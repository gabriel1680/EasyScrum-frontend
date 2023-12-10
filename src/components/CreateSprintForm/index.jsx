import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

/**
 * @param {{ onSubmit: (sprint: import('../../@types/easy-scrum').Sprint) => Promise<any>, isLoading: boolean }} param0
 */
function CreateSprintForm({ onSubmit, isLoading }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit({ name, description, dueDate });
    }

    return (
        <>
            <h3>Nova Sprint</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nome</label>
                <input
                    name="name"
                    type="text"
                    required
                    value={name}
                    disabled={isLoading}
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="description">Descrição</label>
                <textarea
                    name="description"
                    type="text"
                    required
                    value={description}
                    disabled={isLoading}
                    onChange={e => setDescription(e.target.value)}
                ></textarea>
                <label htmlFor="dueDate">Termina em</label>
                <input
                    name="dueDate"
                    type="datetime-local"
                    required
                    value={dueDate}
                    disabled={isLoading}
                    onChange={e => setDueDate(e.target.value)}
                />
                <div className="buttons">
                    <Button text="Salvar" variant="primary" isLoading={isLoading} type="submit" />
                </div>
            </form>
        </>
    );
}

CreateSprintForm.propType = {
    onSubmit: PropTypes.func,
    isLoading: PropTypes.bool,
};

export default CreateSprintForm;
