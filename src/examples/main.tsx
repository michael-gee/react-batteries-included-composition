import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { UserProfile } from './Component';

// import { UserList, User } from './Composition';
import { profile } from './api/data'; // users
// import type { Profile } from './api/data';

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

        <div className="container">{/* Composition */}</div>
      </main>

      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
