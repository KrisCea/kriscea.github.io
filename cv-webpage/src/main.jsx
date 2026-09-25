import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './core/Layout';
import { HomePage } from './pages/HomePage';
import { UserProfile } from './pages/UserProfile';
import './index.css'
import App from './pages/App.jsx'

 
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'users/:userId', element: <UserProfile /> },
    ],
  },
]);
 
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);