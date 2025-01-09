import { useSuspenseQuery } from '@tanstack/react-query';
import type { Example } from './data';

export function useSuspenseExample(id: number) {
  return useSuspenseQuery({
    queryKey: ['suspense-user', id],
    queryFn: () => fetchExample(id as number)
  });
}

export async function fetchExample(id: number): Promise<Example> {
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
