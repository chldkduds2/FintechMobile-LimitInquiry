import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import FintechMobalieLayout from './components/Common/FintechMobalieLayout';

const HomePage = lazy(() => import('@/pages/Home/index'));

const App = () => {
    return (
        <FintechMobalieLayout>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense fallback={<>Loading...</>}>
                            <HomePage />
                        </Suspense>
                    }
                />
            </Routes>
        </FintechMobalieLayout>
    );
};

export default App;
