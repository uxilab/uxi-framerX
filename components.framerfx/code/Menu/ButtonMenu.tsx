import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import * as compos from "../../../uxi/dist/index";
import { ButtonMenuItem } from './.ButtonMenuItem'
import { Connectors } from '../Icons/Connectors'

// For the best editing experience in VSCode, install Prettier
// https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

export class ButtonMenu extends React.Component {
  // Set default values for props if there are none
  // https://reactjs.org/docs/react-component.html#defaultprops
  static defaultProps = {
    // children: [
    //   <ButtonMenuItem
    //     icon={<Connectors />}
    //     children="click me"
    //   />,
    // ]
  };

  static propertyControls = {
  };

  // Return the component contents in JSX
  // https://reactjs.org/docs/introducing-jsx.html
  render() {
    return (
      <compos.ThemeProvider>
        <compos.ButtonMenu {...this.props}>
          <ButtonMenuItem
            icon={<Connectors />}
            children="click me"
          />
        </compos.ButtonMenu>
      </compos.ThemeProvider>
    )
  }
}

export default ButtonMenu
