import React, { CSSProperties } from 'react';
import ClassName from 'classnames';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import Icon from '../Icon';

import styles from './index.module.scss';

export type TCurrentData = {
  title: string;
  path?: string;
  dotText?: string;
};

export type TTab = {
  title: string;
  icon: string;
  path?: string;
  dot?: boolean;
  dotText?: string;
  dotBg?: string;
  dotColor?: string;
};

export interface TabBarProps {
  current: number;
  tabList: TTab[];
  backgroundColor?: string;
  iconSize?: number;
  fontSize?: number;
  color?: string;
  selectedColor?: string;
  style?: CSSProperties;
  classname?: string;
  onClick?(current: number, currentData: TCurrentData): void;
}

const TabBar = (props: TabBarProps) => {
  const {
    current,
    tabList,
    backgroundColor = '#fff',
    iconSize = 24,
    fontSize = 14,
    color = '#98989E',
    selectedColor = '#0069FF',
    style = {},
    classname = '',
    onClick = () => {},
  } = props;

  const renderTab = (tab: TTab, index: number = 1) => {
    const { title, icon, path = '', dotText = '' } = tab;
    return (
      <View
        className={styles.tab}
        onClick={() => onClick(index, { title, path, dotText })}
      >
        <View
          style={{
            fontSize: `${fontSize}px`,
            color: current === index ? selectedColor : color,
          }}
        >
          {tab.title}
        </View>
        <Icon
          icon={icon}
          size={iconSize}
          color={current === index ? selectedColor : color}
        />
      </View>
    );
  };
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
