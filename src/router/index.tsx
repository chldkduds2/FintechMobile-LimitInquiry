import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import FintechMobalieLayout from '@/components/Common/FintechMobalieLayout/index';

const HomePage = lazy(() => import('@/pages/HomePage/index'));
const DetailPage = lazy(() => import('@/pages/DetailPage/index'));

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
                <Route
                    path="/loans:loanId"
                    element={
                        <Suspense fallback={<>Loading...</>}>
                            <DetailPage />
                        </Suspense>
                    }
                />
            </Routes>
        </FintechMobalieLayout>
    );
};

export default Router;
