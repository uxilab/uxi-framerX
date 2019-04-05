import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Domain = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13.4 17.4"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M11.63,5.47a3,3,0,0,0,0-.51,3.16,3.16,0,0,0-2-3A2.51,2.51,0,0,0,7.17,0H6.23A2.5,2.5,0,0,0,3.78,2,3.16,3.16,0,0,0,1.73,5a3,3,0,0,0,0,.52,3.72,3.72,0,0,0,2,6.9H6V16.7a.7.7,0,1,0,1.4,0V12.37H9.67a3.73,3.73,0,0,0,2-6.9Zm-2,5.5H3.73a2.33,2.33,0,0,1-.87-4.48.7.7,0,0,0,.39-.9A1.72,1.72,0,0,1,3.13,5,1.76,1.76,0,0,1,4.56,3.23a.74.74,0,0,0,.57-.73A1.11,1.11,0,0,1,6.23,1.4h.94a1.11,1.11,0,0,1,1.1,1.12.7.7,0,0,0,.57.71A1.76,1.76,0,0,1,10.27,5a1.74,1.74,0,0,1-.12.63.7.7,0,0,0,.39.9A2.33,2.33,0,0,1,9.67,11Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Domain.propTypes = {
  color: PropTypes.string,
};

Domain.defaultProps = {
  color: 'currentColor',
};

export default Domain;
