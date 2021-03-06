import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Plugedin = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16.1 16.65"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M16.1,0H0V1.3H2.05V3.78a6,6,0,0,0,5.35,6v2.1a1.71,1.71,0,0,0,1.71,1.7.41.41,0,0,1,.4.41v2.7h1.3V14a1.71,1.71,0,0,0-1.7-1.71.4.4,0,0,1-.41-.4V9.74a6,6,0,0,0,5.35-6V1.3H16.1ZM12.75,3.78a4.7,4.7,0,0,1-9.4,0V1.3h9.4Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Plugedin.propTypes = {
  color: PropTypes.string,
};

Plugedin.defaultProps = {
  color: 'currentColor',
};

export default Plugedin;
