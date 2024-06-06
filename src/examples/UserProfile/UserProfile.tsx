import { UserProfileDetails } from './UserProfileDetails';
import { UserProfileEmpty } from './UserProfileEmpty';
import { UserProfileError } from './UserProfileError';
import { UserProfileLoading } from './UserProfileLoading';
import { UserProfileProvider } from './UserProfileProvider';

interface UserProfileProps {
  title?: string;
  children?: React.ReactNode;
}

const UserProfile = ({ title, children }: UserProfileProps) => {
  return (
    <section>
      <h2>{title ?? 'User Profile (Batteries Included)'}</h2>
      {children}
    </section>
  );
};

UserProfile.Details = UserProfileDetails;
UserProfile.Empty = UserProfileEmpty;
UserProfile.Error = UserProfileError;
UserProfile.Loading = UserProfileLoading;
UserProfile.Provider = UserProfileProvider;

export { UserProfile };
export type { UserProfileProps };
