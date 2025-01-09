import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchExample } from './ExampleProvider';
import type { ExampleData } from './ExampleProvider';
import type { UseSuspenseQueryResult } from '@tanstack/react-query';

interface SuspenseProviderProps {
  userId: number;
  render: (data: UseSuspenseQueryResult<ExampleData, Error>) => React.ReactNode;
}

const SuspenseProvider = ({ userId, render }: SuspenseProviderProps) => {
  const query = useSuspenseQuery({
    queryKey: ['suspense-user', userId],
    queryFn: () => fetchExample(userId as number)
  });

  return render(query);
};

export { SuspenseProvider };
export type { SuspenseProviderProps };
