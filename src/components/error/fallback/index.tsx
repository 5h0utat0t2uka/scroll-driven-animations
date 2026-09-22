import NotFound from "../../../pages/_not-found";

type Props = {
  status?: number;
};

export function ErrorFallback({ status }: Props) {
  if (status === 404) {
    return <NotFound />;
  }
  return (
    <hgroup>
      <h1>An error occurred.</h1>
      <p>Failed to retrieve data. Please try reloading the page.</p>
    </hgroup>
  );
}
