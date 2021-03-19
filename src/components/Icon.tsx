import React from 'react';
import { View } from '@tarojs/components';

interface IconProps {
  icon: string;
  size: number;
  color: string;
  onClick?(): void;
}

const Icon = (props: IconProps) => {
  const { icon, size, color, onClick = () => {} } = props;

  return (
    <View
      className={`iconfont ${icon}`}
      onClick={onClick}
      style={{ color, fontSize: `${size}px`, display: 'inline' }}
    ></View>
  );
};

export default Icon;
