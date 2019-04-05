import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import * as compos from "../../components/dist/index";

// For the best editing experience in VSCode, install Prettier
// https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

export class Compo extends React.Component {
  // Set default values for props if there are none
  // https://reactjs.org/docs/react-component.html#defaultprops
  static defaultProps = {
    text: "Click me",
    type: "info"
  };

  static propertyControls = {
    text: { type: ControlType.String, title: "Text" },
    type: { type: ControlType.Enum, title: "Type", options: ['info', "error", 'success', 'warning'] },
  };

  // Return the component contents in JSX
  // https://reactjs.org/docs/introducing-jsx.html
  render() {
    return (
      <compos.ThemeProvider>
        <compos.Button {...this.props} />;
      </compos.ThemeProvider>
    )
  }
}

export default Compo
