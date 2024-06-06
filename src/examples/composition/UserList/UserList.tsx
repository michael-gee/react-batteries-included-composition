import { UserListView } from './UserListView';
import { useUsers } from '../../api/useUsers';
import type { Profile } from '../../api/data';

interface UserListProps {
  data?: Profile[];
  render: (profile?: Profile[]) => React.ReactNode;
}

function UserList({ data, render }: UserListProps) {
  const { data: usersData, isFetching, error } = useUsers({ enabled: !data ? true : false });

  return (
    <UserListView loading={isFetching} error={error}>
      {render(data ?? usersData)}
    </UserListView>
  );
}

export { UserList };
export type { UserListProps };
