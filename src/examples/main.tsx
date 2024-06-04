import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import BatteriesIncludedUserProfile from './Component';
import { UserProfile } from './Component';

import { UserList, UserItem } from './Composition';
import { profile } from './api/data';

import './main.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <main>
        <div className="container">
          <UserProfile data={profile} />
          <BatteriesIncludedUserProfile userId={3} />
        </div>

        <div className="container">
          <UserList>
            <UserItem />
            <UserItem />
            <UserItem />
          </UserList>

          <UserList>
            <UserItem />
            <UserItem />
            <UserItem />
          </UserList>
        </div>
      </main>

      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
