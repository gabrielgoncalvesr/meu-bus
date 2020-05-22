import React, { useState, useEffect } from 'react';
import { View, Animated, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import styles from './styles';
import { set } from 'react-native-reanimated';

const SlideBarComponent = ({
    isLongBar,
    barContent,
    mainContent,
}) => {
    const LONG_HEIGHT = 700;
    const SMALL_HEIGHT = 450;

    const LONG_ANIMATED_HEIGHT = 550;
    const SMALL_ANIMATED_HEIGHT = 380;

    const [height, setHeight] = useState(isLongBar ? LONG_HEIGHT : SMALL_HEIGHT);
    const [animatedHeight, setAnimatedHeight] = useState(isLongBar ? LONG_ANIMATED_HEIGHT : SMALL_ANIMATED_HEIGHT);

    const [isHiddenBar, setIsHiddenBar] = useState(false);
    const [bounceValue, setBounceValue] = useState(new Animated.Value(isLongBar ? LONG_ANIMATED_HEIGHT : SMALL_ANIMATED_HEIGHT));

    const handleBar = () => {
        const toValue = isHiddenBar ? animatedHeight : 0;

        setIsHiddenBar(!isHiddenBar);

        Animated.spring(bounceValue, {
            toValue,
            tension: 2,
            friction: 8,
            velocity: 3
        }).start();
    }

    return (
        <View style={styles.container}>
            {mainContent}
            <Animated.View style={[styles.subView, { height: height, transform: [{ translateY: bounceValue }] }]}>
                <TouchableOpacity style={styles.touchableBar} onPress={() => handleBar()}>
                    <Feather style={styles.horizontalBarIcon} name="minus" size={60} color="black" />
                </TouchableOpacity>
                {barContent}
            </Animated.View>
        </View>
    );
}

export default SlideBarComponent;