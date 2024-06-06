import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { UserProfile } from './examples/component/UserProfile';

import { UserList, UserItemView } from './examples/composition/UserList';
import { profile, users } from './examples/api/data';
import type { Profile } from './examples/api/data';

import './main.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <main>
        <div className="container">
          <UserProfile data={profile} />
          <UserProfile userId={3} />
        </div>

        <div className="container">
          <UserList
            data={users}
            render={(users?: Profile[]) => {
              return (
                <ul>
                  {users?.map((user, index) => (
                    <UserItemView key={index} {...user} />
                  ))}
                </ul>
              );
            }}
          />

          <UserList
            render={(users?: Profile[]) => {
              return (
                <ul>
                  {users?.map(user => (
                    <UserItemView key={user.id} {...user} />
                  ))}
                </ul>
              );
            }}
          />
        </div>
      </main>

      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
