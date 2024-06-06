interface UserProfileErrorProps {
  error: Error;
}

function UserProfileError({ error }: UserProfileErrorProps) {
  return <p>Error! {error.message}</p>;
}

export { UserProfileError };
export type { UserProfileErrorProps };
