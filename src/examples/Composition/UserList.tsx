import type { Profile } from '../api/data';

interface UserListComponentProps {
  data?: Profile[];
  loading?: boolean;
  error?: Error | null;
  children?: React.ReactNode;
}

function UserListComponent({ data, loading, children }: UserListComponentProps) {
  console.log(data); // WIP

  if (loading) return <p>Loading...</p>;

  return (
    <section>
      <h2>Users</h2>
      <ul>{children}</ul>
    </section>
  );
}

export default UserListComponent;
