import React from 'react';
import { View, Text } from '@tarojs/components';
import { TitleBar } from '@/components/index'


const RenderTitleBar = () => {
    return (
        <View>
            <TitleBar title="TitleBar" hasBack={true} bgColor="red" fontColor="white" />
            <View>
                <Text>参数:</Text>
            </View>
        </View>
    );
};

export default RenderTitleBar;
