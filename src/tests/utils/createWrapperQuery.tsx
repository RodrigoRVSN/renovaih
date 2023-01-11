import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

interface IWrapper {
  children: ReactNode;
}

export const createWrapperQuery = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return function wrapper({ children }: IWrapper) {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };
};
