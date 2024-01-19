import { createBrowserRouter } from "react-router-dom"
import App from './App'
import OrdersPage from "./OrdersPage"
import Layout from "./Layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <App /> },
            { path: 'orders', element: <OrdersPage /> },

        ]
    },

]);
export default router;