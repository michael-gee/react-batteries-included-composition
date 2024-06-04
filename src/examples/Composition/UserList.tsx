function UserList({ children }: { children?: React.ReactNode }) {
  return (
    <section>
      <h2>Users</h2>

      <ul>{children}</ul>
    </section>
  );
}

export { UserList };
