interface UserListViewProps {
  children: React.ReactNode;
  loading?: boolean;
  error?: Error | null;
}

function UserListView({ children, loading, error }: UserListViewProps) {
  if (loading)
    return (
      <section>
        <p>Loading...</p>
      </section>
    );

  if (error)
    return (
      <section>
        <h2>Users</h2>
        <p>Error! Users was not loaded successfully.</p>
      </section>
    );

  return (
    <section>
      <h2>Users</h2>
      <ul>{children}</ul>
    </section>
  );
}

export { UserListView };
export type { UserListViewProps };
