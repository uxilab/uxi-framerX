import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Notification = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14.86 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M7.43,0A5.56,5.56,0,0,0,1.88,5.55V7.67A3.91,3.91,0,0,1,.53,10.52,1.52,1.52,0,0,0,0,11.67v1.11a1.55,1.55,0,0,0,1,1.44H4.78l0,.07a2.86,2.86,0,0,0,5.24,0l0-.07h3.76l.06,0a1.56,1.56,0,0,0,1-1.45V11.67a1.52,1.52,0,0,0-.53-1.15,3.91,3.91,0,0,1-1.35-3v-2A5.56,5.56,0,0,0,7.43,0Zm5.75,11.69,0,0v1H1.65v-.94l0,0a5.59,5.59,0,0,0,1.84-4V5.55a3.91,3.91,0,0,1,7.81,0v2A5.5,5.5,0,0,0,13.18,11.69Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Notification.propTypes = {
  color: PropTypes.string,
};

Notification.defaultProps = {
  color: 'currentColor',
};

export default Notification;
