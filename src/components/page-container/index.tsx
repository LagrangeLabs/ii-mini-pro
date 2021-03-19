import React, { CSSProperties } from 'react';
import ClassName from 'classnames';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import TitleBar, { TitleBarProps } from '../title-bar';

import styles from './index.module.scss';

interface PageContainerProps extends TitleBarProps {
  className?: string;
  style?: CSSProperties;
  children?: any;
}

const PageContainer = (props: PageContainerProps) => {
  const { className, children, style, ...rest } = props;

  return (
    <View className={styles.index}>
      <TitleBar {...rest} />
      <View className={ClassName(styles.content, className)} style={style}>
        {children}
      </View>
    </View>
  );
};

export default PageContainer;
