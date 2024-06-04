import { useSuspenseQuery } from '@tanstack/react-query';
import type { Profile } from './data';

export function useProfile(id: number) {
  return useSuspenseQuery({
    queryKey: ['user', id],
    queryFn: () => fetchProfile(id as number)
  });
}

export async function fetchProfile(id: number): Promise<Profile | null> {
  if (id < 0) return null;

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
