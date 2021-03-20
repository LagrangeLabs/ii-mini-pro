import React, { CSSProperties } from 'react';
import ClassName from 'classnames';
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import Icon from '../Icon';

import styles from './index.module.scss';

export interface TabBarProps {
  current: number;
  backgroundColor?: string;
  iconSize?: number;
  fontSize?: number;
  color?: string;
  activeColor?: string;
  style?: CSSProperties;
  classname?: string;
}

interface ITab {
  title: string;
  icon: string;
  path: string;
}

const tabList: ITab[] = [
  {
    title: 'tab1',
    icon: 'iconhome',
    path: '/componentsExample/tab-bar/index',
  },
  {
    title: 'tab2',
    icon: 'iconwode',
    path: '/componentsExample/tab-bar/index',
  },
  {
    title: 'tab3',
    icon: 'iconricheng',
    path: '/componentsExample/tab-bar/index',
  },
];

const TabBar = (props: TabBarProps) => {
  const {
    current,
    backgroundColor = '#fff',
    iconSize = 24,
    fontSize = 14,
    color = '#98989E',
    activeColor = '#0069FF',
    style = {},
    classname = '',
  } = props;

  const renderTab = (tab: ITab, index: number = 1) => (
    <View
      className={styles.tab}
      onClick={() => Taro.reLaunch({ url: tab.path })}
    >
      <Text
        style={{ fontSize, color: current === index ? activeColor : color }}
      >
        {tab.title}
      </Text>
      <Icon
        icon={tab.icon}
        size={iconSize}
        color={current === index ? activeColor : color}
      />
    </View>
  );
  return (
    <View
      className={ClassName(styles.tabBar, classname)}
      style={{ ...style, backgroundColor }}
    >
      {tabList.map((tab, index) => renderTab(tab, index + 1))}
    </View>
  );
};

export default TabBar;
