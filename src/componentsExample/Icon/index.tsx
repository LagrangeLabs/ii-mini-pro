import React from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { Icon, PageContainer } from '@/components/index';

import styles from './index.module.scss';

const Index = () => {
  return (
    <PageContainer
      className={styles.index}
      title="图标"
      path="/componentsExample/Icon/index"
      hasBack={true}
    >
      <View className={styles.iconItem_1}>
        <Icon icon="iconhome" color="red" size={30} />
      </View>
      <View className={styles.iconItem_2}>
        <Icon icon="iconwode" color="blue" size={50} />
      </View>
      <View className={styles.iconItem_3}>
        <Icon icon="iconricheng" color="#1AB857" size={100} />
      </View>
    </PageContainer>
  );
};

export default Index;
