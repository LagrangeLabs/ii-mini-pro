/* eslint-disable */
import React, { FunctionComponent } from 'react';

interface Props {
  name: 'huifumoren' | 'home' | 'wode' | 'richeng';
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

declare const IconFont: FunctionComponent<Props>;

export default IconFont;
