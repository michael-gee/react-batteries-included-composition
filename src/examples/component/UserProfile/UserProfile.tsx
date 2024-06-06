import { UserProfileView } from './UserProfileView';
import { useProfile } from '../../api/useProfile';
import type { Profile } from '../../api/data';

interface UserProfileProps {
  userId?: number;
  data?: Profile;
}

const UserProfile = ({ userId, data }: UserProfileProps) => {
  const { data: profileData, isFetching, error } = useProfile(userId ?? -1);
  return <UserProfileView data={data ?? profileData} loading={isFetching} error={error} />;
};

export { UserProfile };
export type { UserProfileProps };
