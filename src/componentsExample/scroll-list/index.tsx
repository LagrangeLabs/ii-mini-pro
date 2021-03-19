import React from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { PageContainer } from '@/components/index';

import styles from './index.module.scss';

const Index = () => {
  return (
    <PageContainer
      className={styles.index}
      title="滚动列表（包含下拉刷新，加载）"
      hasBack={true}
    ></PageContainer>
  );
};

export default Index;
