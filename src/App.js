import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import { Provider } from "react-redux";
import store from "./store";

import theme from "./theme";
import Landing from "./components/Landing";
import NotFound from "./components/NotFound";
import Alert from "./components/Alert";

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <Switch>
          <Route component={Landing} path="/" exact />
          <Route component={NotFound} />
        </Switch>
      </Router>

      <Alert />
    </ThemeProvider>
  </Provider>
);

export default App;
