import { useExample } from './demo/api/useExample';
import type { Example } from './demo/api/data';
import type { UseQueryResult } from '@tanstack/react-query';

interface ExampleProviderProps {
  userId: number;
  render: (data: UseQueryResult<Example, Error>) => React.ReactNode;
}

const ExampleProvider = ({ userId, render }: ExampleProviderProps) => {
  const query = useExample(userId);
  return render(query);
};

export { ExampleProvider };
export type { ExampleProviderProps };
