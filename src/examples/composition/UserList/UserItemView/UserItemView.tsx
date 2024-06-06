import type { Profile } from '../../../api/data';

function UserItemView(profile: Profile) {
  return (
    <li>
      {profile.id} | {profile.name} | {profile.username}
    </li>
  );
}

export { UserItemView };
