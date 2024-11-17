import { StrictMode } from 'react'; 
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './MainLayout.jsx';
import Home from './Home.jsx';
import Statistics from './Statistics.jsx';
import Dashboard from './Dashboard.jsx';
import AppPage from './AppPage.jsx';
import GadgetDetails from './GadgetDetails.jsx';
import NotFound from './NotFound.jsx';
const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/statistics', element: <Statistics /> },
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/app', element: <AppPage /> },
      { path: '/product/:productId', element: <GadgetDetails /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
