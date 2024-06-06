interface UserProfileDetailsProps {
  id: number;
  name: string;
}

function UserProfileDetails({ id, name }: UserProfileDetailsProps) {
  return (
    <>
      <p>id: {id}</p>
      <p>name: {name}</p>
    </>
  );
}

export { UserProfileDetails };
export type { UserProfileDetailsProps };
