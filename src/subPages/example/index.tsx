import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from '@tarojs/components';
import { connectState } from '@/models';

import styles from './index.module.scss';

const Index = () => {
  const { example } = useSelector((state: connectState) => state.example);

  return (
    <View className={styles.index}>
      <Text>副包 -》 {example}</Text>
    </View>
  );
};

export default Index;
