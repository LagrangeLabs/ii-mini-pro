/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconhome = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M979.84 404.544 574.272 84c-34.912-27.648-89.696-27.616-124.576 0L44.16 404.544c-13.856 10.976-16.224 31.104-5.28 44.96s30.624 16.224 44.48 5.28L96 444.416 96 832c0 54.944 57.888 96 108.8 96l640 0c50.304 0 83.2-38.592 83.2-96L928 445.92l11.68 8.864c5.888 4.64 13.12 6.88 20.064 6.88 9.44 0 18.912-4.16 25.216-12.16C995.936 435.648 993.728 415.52 979.84 404.544zM480 864l0-177.408c0-8.832 16-13.248 32-13.248s32 4.416 32 13.248L544 864 480 864zM864 832c0 21.216-5.856 32-19.2 32L608.64 864c0-0.48-0.64-0.864-0.64-1.344l0-176.064c0-37.216-30.016-77.28-96-77.28s-96 40.064-96 77.28l0 176.064c0 0.48 0.864 0.864 0.864 1.344L204.8 864C184.736 864 160 846.656 160 832L160 393.824l328.928-259.616c11.808-9.344 33.12-9.344 44.96 0L864 395.328 864 832z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

Iconhome.defaultProps = {
  size: 18,
};

export default Iconhome;