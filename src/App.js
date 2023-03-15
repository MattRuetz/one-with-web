import React from 'react';

import Header from './components/Header';
import { Button } from 'react-bootstrap';
import AppRoutes from './routes/AppRoutes';

export default function App() {
    return (
        <>
            <Header />
            <AppRoutes />
        </>
    );
}
