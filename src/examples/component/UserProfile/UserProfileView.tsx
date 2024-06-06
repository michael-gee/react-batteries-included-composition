import type { Profile } from '../../api/data';

interface UserProfileViewProps {
  data?: Profile;
  error?: Error | null;
  loading?: boolean;
}

function UserProfileView({ data, error, loading }: UserProfileViewProps) {
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
      {data ? (
        <>
          <p>id: {data.id}</p>
          <p>name: {data.name}</p>
        </>
      ) : (
        <p>Whoops! No user data was found</p>
      )}
    </section>
  );
}

export { UserProfileView };
export type { UserProfileViewProps };
