import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import * as compos from "../../../uxi/dist/index";
// import { Connesctors } from '../Icons/Connectors'

// For the best editing experience in VSCode, install Prettier
// https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

export class ButtonMenuItem extends React.Component {
  // Set default values for props if there are none
  // https://reactjs.org/docs/react-component.html#defaultprops
  static defaultProps = {
    // icon: <Connectors />,
    children: 'click me',
  };

  static propertyControls = {
    children: { type: ControlType.String, title: "Text" },
  };

  // Return the component contents in JSX
  // https://reactjs.org/docs/introducing-jsx.html
  render() {
    return (
      <compos.ThemeProvider>
        <compos.ButtonMenuItem {...this.props} />
      </compos.ThemeProvider>
    )
  }
}

export default ButtonMenuItem
