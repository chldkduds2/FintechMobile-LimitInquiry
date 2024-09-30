import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import FintechMobalieLayout from '@/components/Common/FintechMobalieLayout/index';

const HomePage = lazy(() => import('@/pages/Home/index'));

const Router = () => {
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

export default Router;
