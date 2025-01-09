import { useSuspenseExample } from './demo/api/useSuspenseExample';
import type { Example } from './demo/api/data';
import type { UseSuspenseQueryResult } from '@tanstack/react-query';

interface SuspenseProviderProps {
  userId: number;
  render: (data: UseSuspenseQueryResult<Example, Error>) => React.ReactNode;
}

const SuspenseProvider = ({ userId, render }: SuspenseProviderProps) => {
  const query = useSuspenseExample(userId);
  return render(query);
};

export { SuspenseProvider };
export type { SuspenseProviderProps };
