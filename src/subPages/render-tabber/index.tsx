import React from 'react';
import { View, Text } from '@tarojs/components';
import { TabBar, TitleBar } from '@/components/index'


const RenderTabber = () => {
    return (
        <View>
            <TitleBar title="Tabber" hasBack={true}/>
            <View>
                <Text>参数:</Text>
            </View>
            <View>
                <Text>demo:</Text>
                <TabBar current={1} />
            </View>
        </View>
    );
};

export default RenderTabber;
