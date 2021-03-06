import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Download = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.75 15.78"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <polygon points="4.29 6.04 7.88 9.63 11.46 6.04 10.51 5.09 8.55 7.04 8.55 0 7.2 0 7.2 7.04 5.24 5.09 4.29 6.04" />
          <path d="M15.75,15.78V9.63H10.8l-1.6,1.6H6.55L5,9.63H0v6.15ZM1.35,11H4.4L6,12.58H9.75l1.6-1.6H14.4v3.45h-13Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Download.propTypes = {
  color: PropTypes.string,
};

Download.defaultProps = {
  color: 'currentColor',
};

export default Download;
