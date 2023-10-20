import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./vendor/normalize.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { store } from "./store/index";

const client = new ApolloClient({
  uri: "https://vortex.korabli.su/api/graphql/glossary/",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </Provider>
);
