import Button from ".";

export default {
    title: "Button",
    component: Button,
    tags: ["autodocs"],
};

export const Primary = {
    args: {
        variant: "primary",
        text: "Button",
        onClick: () => undefined,
    },
};

export const Secondary = {
    args: {
        variant: "secondary",
        text: "Button",
        onClick: () => undefined,
    },
};

export const Loading = {
    args: {
        variant: "primary",
        text: "Button",
        onClick: () => undefined,
        isLoading: true,
    },
};
