import React from 'react';
import { AtTabBar } from 'taro-ui';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { PageContainer, TabBar } from '@/components/index';

import styles from './index.module.scss';

const tabList = [
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

const Index = () => {
  return (
    <PageContainer
      className={styles.index}
      title="底部tabber"
      path="/componentsExample/tab-bar/index"
      hasBack={true}
    >
      <View className={styles.item}>
        <TabBar
          current={1}
          tabList={tabList}
          style={{ position: 'relative' }}
        />
      </View>
      <View className={styles.item}>
        <TabBar
          current={1}
          tabList={tabList}
          style={{ position: 'relative' }}
          selectedColor="red"
          color="blue"
        />
      </View>
      <View className={styles.item}>
        <TabBar
          current={2}
          tabList={tabList}
          style={{ position: 'relative' }}
          selectedColor="blue"
          color="red"
        />
      </View>
      <View className={styles.item}>
        <TabBar
          current={3}
          tabList={tabList}
          style={{ position: 'relative' }}
          selectedColor="#1AB857"
          color="blue"
        />
      </View>
    </PageContainer>
  );
};

export default Index;
