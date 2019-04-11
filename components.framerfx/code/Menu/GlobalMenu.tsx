import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import * as compos from "../../../uxi/dist/index";
import { Connectors } from '../Icons/Connectors'


// For the best editing experience in VSCode, install Prettier
// https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

export class GlobalMenu extends React.Component {
  // Set default values for props if there are none
  // https://reactjs.org/docs/react-component.html#defaultprops
  static defaultProps = {
    menuDescriptor: [
      {
        displayName: 'Integration',
        key: 'Integration',
        icon: <Connectors />
      },
    ]
  };

  static propertyControls = {
  };

  // Return the component contents in JSX
  // https://reactjs.org/docs/introducing-jsx.html
  render() {
    return (
      <compos.ThemeProvider>
        <compos.GlobalMenu {...this.props} />
      </compos.ThemeProvider>
    )
  }
}

export default GlobalMenu
