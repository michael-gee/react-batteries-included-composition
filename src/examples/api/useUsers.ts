import { useQuery } from '@tanstack/react-query';
import { Profile } from './data';

export function useUsers(params?: { enabled: boolean }) {
  return useQuery({
    queryKey: [params?.enabled ? 'users' : 'users-disabled'],
    queryFn: fetchUsers,
    staleTime: Infinity,
    enabled: params?.enabled
  });
}

export async function fetchUsers(): Promise<Profile[]> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let usersData: any;

  await new Promise<void>(resolve => {
    setTimeout(async () => {
      usersData = await fetch(`https://jsonplaceholder.typicode.com/users`).then(res => res.json().then(data => data));
      resolve();
    }, 5000); // Delay of 5 seconds
  });

  return usersData;
}
