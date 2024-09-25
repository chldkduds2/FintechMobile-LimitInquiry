import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './style/globals.css';

const defaultQueryOptions = {
    staleTime: 1000 * 60 * 10,
    cacheTime: 1000 * 60 * 30,
};
const queryClient = new QueryClient({
    defaultOptions: {
        queries: defaultQueryOptions,
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <App />
            <ReactQueryDevtools />
        </BrowserRouter>
    </QueryClientProvider>
);
