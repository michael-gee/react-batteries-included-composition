import { useProfile } from '../api/useProfile';
import type { Profile } from '../api/data';

interface UserProfileProps {
  userId?: number;
  data?: Profile;
  loading?: boolean;
}

function UserProfile({ userId, data, loading }: UserProfileProps) {
  const { data: asyncData, error } = useProfile(userId ?? -1);
  const profileData = data ?? asyncData;

  if (loading)
    return (
      <section>
        <p>Loading...</p>
      </section>
    );

  if (error)
    return (
      <section>
        <p>Error! Something went wrong...</p>
      </section>
    );

  return (
    <section>
      <h2>User Profile</h2>
      {profileData ? (
        <>
          <p>id: {profileData.id}</p>
          <p>name: {profileData.name}</p>
        </>
      ) : (
        <p>Whoops! No user data was found</p>
      )}
    </section>
  );
}

export { UserProfile };
export type { UserProfileProps };
