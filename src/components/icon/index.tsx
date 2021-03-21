import React from 'react';
import { View } from '@tarojs/components';

import { IconProps } from './interface';

const Icon = (props: IconProps) => {
  const { icon, size, color, onClick = () => {} } = props;

  return (
    <View
      className={`iconfont ${icon}`}
      onClick={onClick}
      style={{
        color,
        fontSize: `${size}px`,
        display: 'inline',
        lineHeight: '1',
      }}
    ></View>
  );
};

export default Icon;
