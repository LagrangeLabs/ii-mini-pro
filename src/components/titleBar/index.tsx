import React, { useState, CSSProperties } from 'react';
import Taro, { useDidShow } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { initSetStorage, isNull } from '@/utils/tools';

import Icon from '../Icon';
import styles from './index.module.scss';

interface Props {
  title: string;
  hasBack?: boolean;
  bgColor?: string;
  fontColor?: string;
  style?: CSSProperties;
}

const _routers = {
  'ii-mini-pro': '/pages/init/index',
};

const TitleBar = (props: Props) => {
  const {
    title,
    hasBack = true,
    bgColor = '#ffffff',
    fontColor = '#464a5a',
    style = {},
  } = props;
  const { getStorageSync } = Taro;

  const [titleBarHeight, setTitleBarHeight] = useState(0);
  const [titleBarPaddingTop, setTitleBarPaddingTop] = useState(0);
  const [menuButtonHeight, setMenuButtonHeight] = useState(0);

  useDidShow(() => {
    _routers[title] && saveRouters();
    getTitleBarHeight();
  });

  const back = () => {
    const routers = getStorageSync('routers');
    const url = routers[routers.length - 2] || routers[routers.length - 1];
    const backWay = url.includes('/pages') ? 'switchTab' : 'navigateTo';
    const success = () => {
      routers.pop();
      initSetStorage('routers', routers);
    };

    Taro[backWay]({
      url,
      success,
    });
  };

  const saveRouters = () => {
    const routers = getStorageSync('routers') || ['/pages/init/index'];
    const filterRouter =
      routers.filter((item) => item !== _routers[title]) || [];

    title === '常熟移车' || isNull(filterRouter)
      ? initSetStorage('routers', ['/pages/init/index'])
      : initSetStorage('routers', [...filterRouter, _routers[title]]);
  };

  const getTitleBarHeight = () => {
    const menuButtonInfo = Taro.getMenuButtonBoundingClientRect(); //胶囊相关信息
    const { top, height } = menuButtonInfo;
    setTitleBarHeight(top + height + 10);
    setTitleBarPaddingTop(top);
    setMenuButtonHeight(height);
  };

  return (
    <View style={{ position: 'relative', ...style }}>
      {title && process.env.TARO_ENV === 'weapp' && (
        <View>
          <View
            style={{
              height: `${titleBarHeight}px`,
            }}
          ></View>
          <View
            className={styles.titleContainer}
            style={{
              background: bgColor,
              height: `${titleBarHeight}px`,
              paddingTop: `${titleBarPaddingTop}px`,
            }}
          >
            <View
              style={{
                position: 'relative',
                height: `${menuButtonHeight}px`,
              }}
            >
              {hasBack && (
                <View className={styles.backIconWrap} onClick={back}>
                  <Icon
                    value="iconfanhui"
                    size={25}
                    color="#464A5A"
                    onClick={back}
                  />
                </View>
              )}
              <View className={styles.title} style={{ color: fontColor }}>
                {title}
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default TitleBar;
