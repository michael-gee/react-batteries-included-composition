interface ExampleDetailsProps {
  id: number;
  name: string;
}

function ExampleDetails({ id, name }: ExampleDetailsProps) {
  return (
    <>
      <p>id: {id}</p>
      <p>name: {name}</p>
    </>
  );
}

export { ExampleDetails };
export type { ExampleDetailsProps };
