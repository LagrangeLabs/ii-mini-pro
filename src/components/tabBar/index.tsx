import React, { CSSProperties } from 'react';
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import Icon from '../Icon';

import styles from './index.module.scss';

interface Props {
  current: number;
  backgroundColor?: string;
  iconSize?: number;
  fontSize?: number;
  style?: CSSProperties
}

interface ITab {
  title: string;
  icon: string;
  path: string;
}

const tabList: ITab[] = [
  {
    title: 'ii-mini-pro',
    icon: 'iconyiche',
    path: '/pages/init/index',
  },
];

const TabBar = (props: Props) => {
  const {
    current,
    backgroundColor = '#fff',
    iconSize = 24,
    fontSize = 14,
    style = {}
  } = props;

  const renderTab = (tab: ITab, index: number = 1) => (
    <View
      style={style}
      className={styles.tab}
      onClick={() => Taro.switchTab({ url: tab.path })}
    >
      <Text
        style={{ fontSize, color: current === index ? '#0069FF' : '#464A5A' }}
      >
        {tab.title}
      </Text>
      <Icon
        value={tab.icon}
        size={iconSize}
        color={current === index ? '#0069FF' : '#98989E'}
      />
    </View>
  );
  return (
    <View className={styles.tabBar} style={{ backgroundColor }}>
      {tabList.map((tab, index) => renderTab(tab, index + 1))}
    </View>
  );
};

export default TabBar;
