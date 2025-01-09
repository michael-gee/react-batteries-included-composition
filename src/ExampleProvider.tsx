import { useQuery } from '@tanstack/react-query';
import type { UseQueryResult } from '@tanstack/react-query';

interface ExampleProviderProps {
  userId: number;
  render: (data: UseQueryResult<ExampleData, Error>) => React.ReactNode;
}

const ExampleProvider = ({ userId, render }: ExampleProviderProps) => {
  const query = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchExample(userId as number),
    enabled: userId > 0
  });

  return render(query);
};

export { ExampleProvider };
export type { ExampleProviderProps };

export async function fetchExample(id: number): Promise<ExampleData> {
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

export type ExampleData = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
