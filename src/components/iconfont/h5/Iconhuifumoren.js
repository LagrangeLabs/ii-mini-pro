/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconhuifumoren = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M64 512h64c0 211.2 172.8 384 384 384s384-172.8 384-384-172.8-384-384-384c-115.2 0-217.6 51.2-288 128H384v64H128V64h64v134.4C275.2 115.2 384 64 512 64c249.6 0 448 198.4 448 448s-198.4 448-448 448-448-198.4-448-448z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

Iconhuifumoren.defaultProps = {
  size: 18,
};

export default Iconhuifumoren;
