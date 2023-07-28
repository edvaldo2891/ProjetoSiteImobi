import React from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './components/template/App';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import './css/style.css';
import './css/App.css';

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Home from './components/template/Home';
import Contato from './components/pages/Contato';
import ContatoIDDetails from './components/pages/ContatoIDDetails';
import Projetos from './components/pages/Projetos';
import Imoveis from './components/pages/Imoveis';
import ErrorPage from './components/template/ErrorPage';


Modal.setAppElement('#root');

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "projetos",
        element: <Projetos />,
      },
      {
        path: "imoveis",
        element: <Imoveis />,
      },
      {
        path: "contato",
        element: <Contato />,
      },
      {//identificador unico para trazer informações de forma dinãmica
        path: "contato/:id",
        element: <ContatoIDDetails />,
      },
      {//rota para paginas que deixaram de existir
        path: "oldContato",//exemplo de pagina que existia
        element: <Navigate to="/contato"/>,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();





