import { gql, useQuery } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { client } from "./lib/apollo";
import { Event } from "./pages/Event";

import { Router } from "./Router";

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        {/* <Event /> */}
      </ApolloProvider>
    </div>
  );
}

export default App;
