import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import History from "./pages/History";
import CEPInfo from "./pages/CEPInfo";
import Home from "./pages/Home";
import rocketTheme from "./styles/themes/rocketTheme";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <ChakraProvider theme={rocketTheme}>
      <BrowserRouter>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cep/:cep" component={CEPInfo} />
          <Route exact path="/historico" component={History} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
