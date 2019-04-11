import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import * as compos from "../../../uxi/dist";

// For the best editing experience in VSCode, install Prettier
// https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

export class Compo extends React.Component {
  // Set default values for props if there are none
  // https://reactjs.org/docs/react-component.html#defaultprops
  static defaultProps = {
    color: "red",
  };

  static propertyControls = {
    color: { type: ControlType.Color, title: "Color" },
  };

  // Return the component contents in JSX
  // https://reactjs.org/docs/introducing-jsx.html
  render() {
    return <compos.Connectors {...this.props} />;
  }
}

export default Compo
