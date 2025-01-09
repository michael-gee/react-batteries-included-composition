import { ExampleDetails } from './ExampleDetails';
import { ExampleEmpty } from './ExampleEmpty';
import { ExampleError } from './ExampleError';
import { ExampleFallback } from './ExampleFallback';
import { ExampleProvider } from './ExampleProvider';
import { SuspenseProvider } from './SuspenseProvider';

interface ExampleProps {
  title?: string;
  children?: React.ReactNode;
}

const Example = ({ title, children }: ExampleProps) => {
  return (
    <section>
      <h2>{title ?? '<Example />'}</h2>
      {children}
    </section>
  );
};

Example.Details = ExampleDetails;
Example.Empty = ExampleEmpty;
Example.Error = ExampleError;
Example.Fallback = ExampleFallback;
Example.Provider = ExampleProvider;
Example.SuspenseProvider = SuspenseProvider;

export { Example };
export type { ExampleProps };
