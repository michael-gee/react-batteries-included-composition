import { Suspense } from 'react';
import { Example } from './Example';
import { isEmpty } from 'communitils';

export const App = () => {
  return (
    <main>
      <div className="batteries-included-container">
        <Example.Provider
          userId={Math.floor(Math.random() * 10) + 1}
          render={({ data, isFetching, error }) => {
            return (
              <Example title="<Example /> (Batteries Included)">
                {isFetching && <Example.Fallback />}
                {error && <Example.Error error={error} />}
                {data && <Example.Details id={data.id} name={data.name} />}
                {isEmpty(data) && !isFetching && !error && <Example.Empty />}
              </Example>
            );
          }}
        />
      </div>

      <Suspense
        fallback={
          <div className="batteries-included-container">
            <Example title="Suspense <Example /> (Batteries Included)">
              <Example.Fallback />
            </Example>
          </div>
        }
      >
        <Example.SuspenseProvider
          userId={Math.floor(Math.random() * 10) + 1}
          render={({ data, isFetching, error }) => {
            return (
              <div className="batteries-included-container">
                <Example title="Suspense <Example /> (Batteries Included)">
                  {error && <Example.Error error={error} />}
                  {data && <Example.Details id={data.id} name={data.name} />}
                  {isEmpty(data) && !isFetching && !error && <Example.Empty />}
                </Example>
              </div>
            );
          }}
        />
      </Suspense>

      <div className="hard-coded-container">
        <Example title="<Example.Details />">
          <Example.Details id={123} name="Michael Gee" />
        </Example>

        <Example title="<Example.Error />">
          <Example.Error error={{ name: 'Error', message: 'Manually passed error message' }} />
        </Example>
      </div>

      <div className="hard-coded-container">
        <Example title="<Example.Loading />">
          <Example.Fallback />
        </Example>

        <Example title="<Example.Empty />">
          <Example.Empty />
        </Example>
      </div>
    </main>
  );
};
