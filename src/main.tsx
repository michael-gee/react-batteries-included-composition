import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { UserProfile } from './examples/UserProfile';
import { profile } from './examples/api/data';

import './main.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <main>
        <div className="batteries-included-container">
          <UserProfile.Provider
            userId={3}
            render={({ data, isFetching, error }) => {
              return (
                <UserProfile>
                  {isFetching && <UserProfile.Loading />}
                  {error && <UserProfile.Error error={error} />}
                  {data && <UserProfile.Details id={data.id} name={data.name} />}
                  {!data && !isFetching && !error && <UserProfile.Empty />}
                </UserProfile>
              );
            }}
          />
        </div>

        <div className="hard-coded-container">
          <UserProfile title="<UserProfile.Details />">
            <UserProfile.Details id={profile.id} name={profile.name} />
          </UserProfile>

          <UserProfile title="<UserProfile.Error />">
            <UserProfile.Error error={{ name: 'Error', message: 'Manually passed error message' }} />
          </UserProfile>
        </div>

        <div className="hard-coded-container">
          <UserProfile title="<UserProfile.Loading />">
            <UserProfile.Loading />
          </UserProfile>

          <UserProfile title="<UserProfile.Empty />">
            <UserProfile.Empty />
          </UserProfile>
        </div>
      </main>

      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
