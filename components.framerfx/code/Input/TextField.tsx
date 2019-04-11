import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import * as compos from "../../../components/dist/index";

// For the best editing experience in VSCode, install Prettier
// https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

export class TextField extends React.Component {
  // Set default values for props if there are none
  // https://reactjs.org/docs/react-component.html#defaultprops
  static defaultProps = {
    type: 'text'
    placeholder: "Type something...",
    // isFullWidth: true,
  };

  static propertyControls = {
    type: { type: ControlType.Enum, title: "Type", options: ['text', 'email', 'password', 'search', 'file', 'number'] },
    placeholder: { type: ControlType.String, title: "Placeholder" },
    // isFullWidth: { type: ControlType.Boolean, title: "Full width" },
  };

  // Return the component contents in JSX
  // https://reactjs.org/docs/introducing-jsx.html
  render() {
    return (
      <compos.ThemeProvider>
        <compos.TextField {...this.props} />
      </compos.ThemeProvider>
    )
  }
}

export default TextField
