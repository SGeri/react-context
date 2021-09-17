import React from "react";
import Helmet from "react-helmet";
import { Header } from "semantic-ui-react";

import Child from "./components/child";
import { Context } from "./components/context";

class App extends React.Component {
  state = {
    contextStore: {
      theme: "light",
      toggleTheme: () => this.toggleTheme(),
    },
  };

  toggleTheme = () => {
    this.setState((prevState) => {
      this.state.contextStore.theme === "light"
        ? (prevState.contextStore.theme = "dark")
        : (prevState.contextStore.theme = "light");
      return { prevState };
    });
  };

  render() {
    const light = this.state.contextStore.theme === "light";

    return (
      <div class="ui container">
        <Helmet
          bodyAttributes={{
            style: `background-color: ${
              this.state.contextStore.theme === "light"
                ? "white"
                : "rgb(29, 29, 32)"
            };`,
          }}
        />

        <Context.Provider value={this.state.contextStore}>
          <Header as="h2" inverted={!light}>
            React Context Showcase
          </Header>

          <Child />
        </Context.Provider>
      </div>
    );
  }
}

export default App;
