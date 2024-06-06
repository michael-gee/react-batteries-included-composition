import UserListComponent from './UserList';
import type { Profile } from '../api/data';

interface UserListProps {
  data?: Profile[];
  children?: React.ReactNode;
}

const UserList = (props: UserListProps) => {
  console.log(props);

  return <UserListComponent />;
};

export { UserList };
