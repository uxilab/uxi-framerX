import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import * as compos from "../../../uxi/dist/index";


export class Button extends React.Component {
  static defaultProps = {
    text: "Click me",
    type: "info",
    onClick: () => {},
  };

  static propertyControls = {
    text: { type: ControlType.String, title: "Text" },
    type: { type: ControlType.Enum, title: "Type", options: ['info', "error", 'success', 'warning'] },
  };

  render() {
    return (
      <compos.ThemeProvider>
        <compos.Button {...this.props} />
      </compos.ThemeProvider>
    )
  }
}

export default Button
