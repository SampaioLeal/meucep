import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CEPInfo from "./pages/CEPInfo";
import Home from "./pages/Home";
import rocketTheme from "./styles/themes/rocketTheme";

function App() {
  return (
    <ChakraProvider theme={rocketTheme}>
      <BrowserRouter>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cep/:cep" component={CEPInfo} />
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
