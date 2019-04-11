import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import * as compos from "../../../uxi/dist/index";


// For the best editing experience in VSCode, install Prettier
// https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

export class Panel extends React.Component {
  // Set default values for props if there are none
  // https://reactjs.org/docs/react-component.html#defaultprops
  static defaultProps = {
  };

  static propertyControls = {
  };

  // Return the component contents in JSX
  // https://reactjs.org/docs/introducing-jsx.html
  render() {
    return (
      <compos.Panel {...this.props} style={{ height: '100%' }} />
    )
  }
}

export default Panel
