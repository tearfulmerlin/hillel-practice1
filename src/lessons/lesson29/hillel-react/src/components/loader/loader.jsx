export default function Suspense({children, isLoading, error}) {
  if (isLoading) {
    return 'Loading...';
  }

  if (error) {
    return 'error'
  }

  return children;
}
