import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Animated, TouchableOpacity } from 'react-native';

import { getThemeColors } from '../../util/appContext';

import styles from './styles';

const SlideBarComponent = ({ isLongBar, barContent, mainContent }) => {

    const colors = getThemeColors();

    const LONG_HEIGHT = 700;
    const SMALL_HEIGHT = 450;
    const LONG_ANIMATED_HEIGHT = 550;
    const SMALL_ANIMATED_HEIGHT = 380;

    const animatedHeight = isLongBar ? LONG_ANIMATED_HEIGHT : SMALL_ANIMATED_HEIGHT;

    const [isHiddenBar, setIsHiddenBar] = useState(false);
    const [bounceValue, setBounceValue] = useState(new Animated.Value(isLongBar ? LONG_ANIMATED_HEIGHT : SMALL_ANIMATED_HEIGHT));

    const handleBarPress = () => {
        setIsHiddenBar(!isHiddenBar);

        Animated.spring(bounceValue, {
            toValue: isHiddenBar ? animatedHeight : 0,
            tension: 2,
            friction: 8,
            velocity: 3
        }).start();
    }

    return (
        <View style={styles.content}>
            {mainContent}

            <Animated.View
                style={[styles.subView, {
                    height: isLongBar ? LONG_HEIGHT : SMALL_HEIGHT,
                    transform: [{ translateY: bounceValue }]
                }]}
            >
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => handleBarPress()}
                    style={[styles.touchableBar, { backgroundColor: colors.thirdy }]}
                >
                    <Feather
                        name="minus"
                        style={styles.icon}
                    />
                </TouchableOpacity>

                {barContent}
            </Animated.View>
        </View>
    );
}

export default SlideBarComponent;