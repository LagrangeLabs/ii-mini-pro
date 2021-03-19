import React from 'react';
import { useSelector } from 'react-redux';
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { connectState } from '@/models';
import { IState as homeState } from '@/models/home/interface';
import { PageContainer } from '@/components/index';

import { ComponentList } from './index.config';
import useDispatchInit from './useDispatch';
import styles from './index.module.scss';

interface IRenderItem {
  title: string;
  url: string;
}

const Index = () => {
  const {}: homeState = useSelector((state: connectState) => state.home);
  const {} = useDispatchInit();

  const renderItem = ({ title, url }: IRenderItem, key: number) => (
    <View
      key={key}
      className={styles.item}
      onClick={() => Taro.navigateTo({ url: `/componentsExample/${url}` })}
    >
      <Text>{title}</Text>
      <View className={styles.itemIcon}></View>
    </View>
  );

  return (
    <PageContainer className={styles.index} title="ii-mini-pro" hasBack={false}>
      {ComponentList.map((component: IRenderItem, index: number) =>
        renderItem(component, index),
      )}
    </PageContainer>
  );
};

export default Index;
