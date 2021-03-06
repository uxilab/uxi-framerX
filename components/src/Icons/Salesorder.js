import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Salesorder = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18.04 15.7"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M0,5.89V7.47H1.07l0,.1,1.67,7.51a.78.78,0,0,0,.77.62h11a.79.79,0,0,0,.77-.62L17,7.47H18V5.89H15L11.6,0,10.22.78l2.92,5.11H4.89L7.81.78,6.44,0,3.07,5.89ZM15.35,7.47l-1.48,6.65H4.17l0-.1L2.69,7.47Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Salesorder.propTypes = {
  color: PropTypes.string,
};

Salesorder.defaultProps = {
  color: 'currentColor',
};

export default Salesorder;
