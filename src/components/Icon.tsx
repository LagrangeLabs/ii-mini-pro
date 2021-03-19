import React from 'react';
import { View } from '@tarojs/components';

interface IProps {
  icon: string;
  size: number;
  color: string;
  onClick?(): void;
}

const Icon = (props: IProps) => {
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
