import React from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { PageContainer } from '@/components/index';

import styles from './index.module.scss';

const Index = () => {
  return (
    <PageContainer
      className={styles.index}
      title="底部tabber"
      hasBack={true}
    ></PageContainer>
  );
};

export default Index;
