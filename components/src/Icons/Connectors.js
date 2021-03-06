import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Connectors = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.75 15.27"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <circle cx="4.88" cy="4.27" r="1.5" />
          <circle cx="8.07" cy="7.27" r="1.5" />
          <circle cx="8.07" cy="13.77" r="1.5" />
          <circle cx="8.07" cy="1.5" r="1.5" />
          <circle cx="11.26" cy="4.27" r="1.5" />
          <path d="M5.77,11V9.63A6.57,6.57,0,0,1,1.3,3.53H0A7.86,7.86,0,0,0,5.77,11Z" />
          <path d="M10.37,9.48v1.39a7.84,7.84,0,0,0,5.38-7.34h-1.3A6.56,6.56,0,0,1,10.37,9.48Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Connectors.propTypes = {
  color: PropTypes.string,
};

Connectors.defaultProps = {
  color: 'currentColor',
};

export default Connectors;
