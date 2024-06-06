import type { Profile } from '../api/data';

function User(profile: Profile) {
  return (
    <li>
      {profile.name} - {profile.username}
    </li>
  );
}

export { User };
