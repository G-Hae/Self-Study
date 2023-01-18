import React from 'react';
import { createRoot } from "react-dom/client";
import { ThemeProvider } from 'styled-components';
import App from './App';
import { theme } from './theme';

const root = createRoot(document.getElementById("root") as HTMLElement);


root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
