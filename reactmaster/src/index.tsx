import React from 'react';
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import App from './App';

const queryClient = new QueryClient()


const root = createRoot(document.getElementById("root") as HTMLElement);


root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
          <App />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
