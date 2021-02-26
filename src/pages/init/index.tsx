import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { TitleBar, TabBar } from '@/components/index';
import initLogo from '@/asset/images/initLogo.png';
import initBack from '@/asset/images/initBack.png';
import { connectState } from '@/models';
import { IState as initState } from '@/models/init/interface';

import useDispatchInit from './useDispatch';
import styles from './index.module.scss';

const Index = () => {
  const { title }: initState = useSelector((state: connectState) => state.init);
  const { initTitle } = useDispatchInit();

  useEffect(() => {
    initTitle({ title: 'ii-mini-pro' });
  }, []);

  return (
    <View className={styles.index}>
      <TitleBar title={title} hasBack={false} />
      <Image className={styles.initLogo} src={initLogo} />
      <Image className={styles.initBack} src={initBack} />
      <TabBar current={1} />
    </View>
  );
};

export default Index;
