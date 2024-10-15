import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('@/pages/HomePage/index'));
const LoansDetailPage = lazy(() => import('@/pages/LoansDetailPage/index'));

const Router = () => {
    return (
        <>
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
                    path="loansDetail/:loanId"
                    element={
                        <Suspense fallback={<>Loading...</>}>
                            <LoansDetailPage />
                        </Suspense>
                    }
                />
            </Routes>
        </>
    );
};

export default Router;
