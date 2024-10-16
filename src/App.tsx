import Router from './router/index';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'react-redux';
import store from './store/index';
import FintechMobalieLayout from '@/components/Common/FintechMobalieLayout/index';
import './style/globals.css';
import Header from '@/components/Common/Header/index';

const App = () => {
    const defaultQueryOptions = {
        staleTime: 1000 * 60 * 10,
        cacheTime: 1000 * 60 * 30,
    };
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: defaultQueryOptions,
        },
    });

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Provider store={store}>
                    <FintechMobalieLayout>
                        <Router />
                    </FintechMobalieLayout>
                    {/* <ReactQueryDevtools  /> */}
                </Provider>
            </BrowserRouter>
        </QueryClientProvider>
    );
};

export default App;
