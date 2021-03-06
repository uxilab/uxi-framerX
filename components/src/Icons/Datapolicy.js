import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Datapolicy = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.78 16.04"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M7.1,0a3.63,3.63,0,1,0,3.62,3.62A3.63,3.63,0,0,0,7.1,0Zm0,6A2.36,2.36,0,1,1,9.45,3.62,2.36,2.36,0,0,1,7.1,6Z" />
          <path d="M0,16H9.52V14.42H1.58v-.11c0-2.19,2.27-3.72,5.52-3.72a8.48,8.48,0,0,1,2.42.33V9.29A10.69,10.69,0,0,0,7.1,9C2.92,9,0,11.19,0,14.31Z" />
          <path d="M13.05,10.59a2.73,2.73,0,1,0,2.73,2.73A2.72,2.72,0,0,0,13.05,10.59Zm1.58,2.16L12.8,14.57l-1.32-1.32a.29.29,0,0,1,.41-.41l.91.91,1.42-1.41a.28.28,0,0,1,.41,0A.3.3,0,0,1,14.63,12.75Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Datapolicy.propTypes = {
  color: PropTypes.string,
};

Datapolicy.defaultProps = {
  color: 'currentColor',
};

export default Datapolicy;
