import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import TasksView from "./pages/Tasks";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/:sprintId/tasks',
                element: <TasksView />
            }
        ]
    } 
]);
