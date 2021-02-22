import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Taro from '@tarojs/taro';
import { AtButton } from 'taro-ui';
import { View, Text, Image } from '@tarojs/components';
import { connectState } from '@/models';
import Icon from '@/components/Icon';
import exampleImage from '@/asset/images/example.png';

import useDispatchExample from './useDispatch';
import styles from './index.module.scss';

const Index = () => {
  const { example } = useSelector((state: connectState) => state.example);
  const { test, save } = useDispatchExample();

  useEffect(() => {
    save({ example: 'Hello world! ' });
    test('666');
  }, []);

  return (
    <View className={styles.index}>
      <Text>{example}</Text>
      <View onClick={() => Taro.navigateTo({ url: '/subPages/example/index' })}>
        点我
      </View>
      <Image src={exampleImage} />
      <Icon value="iconicons8-phone" size={30} color="#F00" />
      <AtButton>111</AtButton>
    </View>
  );
};

export default Index;
