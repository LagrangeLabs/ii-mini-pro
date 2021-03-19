import React, { useState } from 'react';
import Taro, { useDidShow } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';

import defaultBack from './back.png';
import styles from './index.module.scss';

interface Props {
  title: string;
  hasBack?: boolean;
  bgColor?: string;
  fontColor?: string;
}

const _routers = {
  'ii-mini-pro': '/pages/home/index',
};

const { setStorageSync } = Taro;

const TitleBar = (props: Props) => {
  const {
    title,
    hasBack = true,
    bgColor = '#ffffff',
    fontColor = '#464a5a',
  } = props;
  const { getStorageSync } = Taro;

  const [titleBarHeight, setTitleBarHeight] = useState(0);
  const [titleBarPaddingTop, setTitleBarPaddingTop] = useState(0);
  const [menuButtonHeight, setMenuButtonHeight] = useState(0);

  useDidShow(async () => {
    await saveRouters();
    getTitleBarHeight();
  });

  const back = async () => {
    const routers = (await getStorageSync('routers')) || [];
    if (!routers.length) {
      return;
    }
    
    const currentUrl = routers[routers.length - 1];
    const backWay = currentUrl.includes('/pages') ? 'switchTab' : 'redirectTo';
    const success = () => {
      routers.pop();
      setStorageSync('routers', routers);
    };

    Taro[backWay]({
      url: currentUrl,
      success,
    });
  };

  const saveRouters = async () => {
    if (!_routers[title]) {
      return;
    }
    const _routerFirstKey = Object.keys(_routers)[0];
    const routers = getStorageSync('routers') || [];

    // 如果当前路由是首页（默认首个）路由
    if (title === _routerFirstKey) {
      // 清空历史路由缓存，并初始化路由缓存
      return await setStorageSync('routers', [_routers[title]]);
    }
    await setStorageSync('routers', [...routers, _routers[title]]);
  };

  // 获取 titleBar 高度（适配不同机型）
  const getTitleBarHeight = () => {
    const menuButtonInfo = Taro.getMenuButtonBoundingClientRect(); //胶囊相关信息
    const { top, height } = menuButtonInfo;
    setTitleBarHeight(top + height + 10);
    setTitleBarPaddingTop(top);
    setMenuButtonHeight(height);
  };

  return (
    <View style={{ position: 'relative' }}>
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
                  <Image src={defaultBack} className={styles.backIcon} />
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
