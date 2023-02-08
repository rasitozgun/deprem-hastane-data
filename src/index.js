import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MersinPage from './pages/MersinPage';
import KayseriPage from './pages/KayseriPage';
import AdanaPage from './pages/AdanaPage';
import AnkaraPage from './pages/AnkaraPage';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'mersinPage',
    element: <MersinPage />,
  },
  {
    path: 'kayseriPage',
    element: <KayseriPage />,
  },
  {
    path: 'adanaPage',
    element: <AdanaPage />,
  },
  {
    path: 'ankaraPage',
    element: <AnkaraPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
