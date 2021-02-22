import React from 'react';
import { View } from '@tarojs/components';

interface IProps {
  value: string;
  color: string;
  size: number;
}

const Icon = (props: IProps) => {
  const { value, color, size } = props;
  return (
    <View
      className={`iconfont ${value}`}
      style={{ color, fontSize: `${size}px`, display: 'inline' }}
    ></View>
  );
};

export default Icon;
