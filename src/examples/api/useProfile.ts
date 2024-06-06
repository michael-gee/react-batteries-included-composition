import { useQuery } from '@tanstack/react-query';
import type { Profile } from './data';

export function useProfile(id: number) {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => fetchProfile(id as number),
    staleTime: Infinity,
    enabled: id > 0
  });
}

export async function fetchProfile(id: number): Promise<Profile> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let profileData: any;

  await new Promise<void>(resolve => {
    setTimeout(async () => {
      profileData = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res =>
        res.json().then(data => data)
      );
      resolve();
    }, 5000); // Delay of 5 seconds
  });

  return profileData;
}
