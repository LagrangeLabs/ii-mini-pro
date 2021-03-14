import React from 'react';
import { useSelector } from 'react-redux';
import Taro from '@tarojs/taro';
import { View, ScrollView, Text } from '@tarojs/components';
import { TitleBar } from '@/components/index';
import { connectState } from '@/models';
import { IState as initState } from '@/models/init/interface';

import { componentList } from './const'
import useDispatchInit from './useDispatch';
import styles from './index.module.scss';

export interface IComponentPointer {
  title: string;
  url: string
}

const Index = () => {
  /** model 使用例子 */
  const { }: initState = useSelector((state: connectState) => state.init);
  const { } = useDispatchInit();

  const renderComponentPointer = (component: IComponentPointer, key: number) => (
    <View key={key} className={styles.componentPointer}>
      <Text>{component.title}：</Text>
      <Text onClick={() => Taro.redirectTo({ url: component.url })}>查看 demo</Text>
    </View>
  )

  return (
    <View className={styles.index}>
      <TitleBar title="ii-mini-pro" hasBack={false} bgColor="#ffffff" />
      <ScrollView>
        {componentList.map((item, index: number) => renderComponentPointer(item, index))}
      </ScrollView>
    </View>
  );
};

export default Index;
