import React from "react";
import { Button } from "semantic-ui-react";

import { Context } from "./context";

class Child extends React.Component {
  render() {
    const light = this.context.theme === "light";

    return (
      <div
        style={{
          color: this.context.theme === "light" ? "black" : "white",
        }}
      >
        <p>Current theme setting: {this.context.theme}</p>
        <p>Project:</p>
        <ul>
          <li>
            <a href="https://github.com/SGeri/react-context/">
              Github Repository
            </a>
          </li>
          <li>
            <a href="https://sgeri.github.io/react-context/">Github Page</a>
          </li>
        </ul>

        <Button
          onClick={this.context.toggleTheme}
          inverted={!light}
          secondary={light}
        >
          Change Theme
        </Button>
      </div>
    );
  }
}

Child.contextType = Context;

export default Child;
