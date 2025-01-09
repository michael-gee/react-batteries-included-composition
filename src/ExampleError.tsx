interface ExampleErrorProps {
  error: Error;
}

function ExampleError({ error }: ExampleErrorProps) {
  return <p className="demo-error">Error! {error.message}</p>;
}

export { ExampleError };
export type { ExampleErrorProps };
