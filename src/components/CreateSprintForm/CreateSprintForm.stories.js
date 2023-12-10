import CreateSprintForm from '.';

import '../../App.css';
import '../../index.css';

export default {
    title: 'CreateSprintForm',
    component: CreateSprintForm,
    tags: ['autodocs'],
};

export const Default = {
    args: {
        isLoading: false,
        onSubmit: () => null,
    },
};

export const Loading = {
    args: {
        isLoading: true,
        onSubmit: () => null,
    },
};
