import { useRoutes } from "react-router-dom";

import { routes } from "./routes";

import { getQueryClient } from "./lib/react-query/getQueryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const elem = useRoutes(routes);
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {elem}
      <ReactQueryDevtools initialIsOpen={import.meta.env.DEV} />
    </QueryClientProvider>
  );
}

export default App;
