import React from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { PageContainer, TabBar } from '@/components/index';

import styles from './index.module.scss';

const Index = () => {
  return (
    <PageContainer className={styles.index} title="底部tabber" hasBack={true}>
      <View className={styles.item}>
        <TabBar current={1} style={{ position: 'relative' }} />
      </View>
      <View className={styles.item}>
        <TabBar
          current={1}
          style={{ position: 'relative' }}
          activeColor="red"
          color="blue"
        />
      </View>
      <View className={styles.item}>
        <TabBar
          current={2}
          style={{ position: 'relative' }}
          activeColor="blue"
          color="red"
        />
      </View>
      <View className={styles.item}>
        <TabBar
          current={3}
          style={{ position: 'relative' }}
          activeColor="#1AB857"
          color="blue"
        />
      </View>
    </PageContainer>
  );
};

export default Index;
