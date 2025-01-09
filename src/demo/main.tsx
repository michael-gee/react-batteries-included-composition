import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Example } from '../Example';
import { isEmpty } from 'communitils';
import { data } from './api/data';

import './main.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <main>
        <div className="batteries-included-container">
          <Example.Provider
            userId={3}
            render={({ data, isFetching, error }) => {
              return (
                <Example title="<Example /> (Batteries Included)">
                  {isFetching && <Example.Fallback />}
                  {error && <Example.Error error={error} />}
                  {data && <Example.Details id={data.id} name={data.name} />}
                  {isEmpty(data) && !isFetching && !error && <Example.Empty />}
                </Example>
              );
            }}
          />
        </div>

        <Suspense
          fallback={
            <div className="batteries-included-container">
              <Example title="Suspense <Example /> (Batteries Included)">
                <Example.Fallback />
              </Example>
            </div>
          }
        >
          <Example.SuspenseProvider
            userId={3}
            render={({ data, isFetching, error }) => {
              return (
                <div className="batteries-included-container">
                  <Example title="Suspense <Example /> (Batteries Included)">
                    {error && <Example.Error error={error} />}
                    {data && <Example.Details id={data.id} name={data.name} />}
                    {isEmpty(data) && !isFetching && !error && <Example.Empty />}
                  </Example>
                </div>
              );
            }}
          />
        </Suspense>

        <div className="hard-coded-container">
          <Example title="<Example.Details />">
            <Example.Details id={data.id} name={data.name} />
          </Example>

          <Example title="<Example.Error />">
            <Example.Error error={{ name: 'Error', message: 'Manually passed error message' }} />
          </Example>
        </div>

        <div className="hard-coded-container">
          <Example title="<Example.Loading />">
            <Example.Fallback />
          </Example>

          <Example title="<Example.Empty />">
            <Example.Empty />
          </Example>
        </div>
      </main>

      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
