import React, { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import './bootstrap.min.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);



root.render(
    <StrictMode>
        <Router>
            <App />
        </Router>
    </StrictMode>
);
