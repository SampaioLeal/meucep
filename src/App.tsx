import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import rocketTheme from "./styles/themes/rocketTheme";

function App() {
  return (
    <ChakraProvider theme={rocketTheme}>
      <BrowserRouter>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/about" />
          <Route exact path="/users" /> */}
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
