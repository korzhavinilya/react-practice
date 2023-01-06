import { QueryClient, QueryClientProvider } from 'react-query';
import Characters from './components/Characters';

export default function ReactQuery() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Characters />
    </QueryClientProvider>
  );
}
