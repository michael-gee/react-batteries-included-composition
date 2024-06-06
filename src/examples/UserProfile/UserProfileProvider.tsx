import { useProfile } from '../api/useProfile';
import type { Profile } from '../api/data';
import type { UseQueryResult } from '@tanstack/react-query';

interface UserProfileProviderProps {
  userId: number;
  render: (data: UseQueryResult<Profile, Error>) => React.ReactNode;
}

const UserProfileProvider = ({ userId, render }: UserProfileProviderProps) => {
  const query = useProfile(userId);
  return render(query);
};

export { UserProfileProvider };
export type { UserProfileProviderProps };
