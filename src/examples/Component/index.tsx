import { Suspense } from 'react';
import { UserProfile } from './UserProfile';

const UserProfileProvider = ({ userId }: { userId: number }) => {
  return (
    <Suspense fallback={<UserProfile loading />}>
      <UserProfile userId={userId} />
    </Suspense>
  );
};

export default UserProfileProvider;
export * from './UserProfile';
