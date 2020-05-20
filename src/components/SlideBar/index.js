import React, { useState } from 'react';
import { View, Animated, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import styles from './styles';

const SlideBarComponent = ({ mainContent, barContent }) => {

    const [isHiddenBar, setIsHiddenBar] = useState(false);
    const [bounceValue, setBounceValue] = useState(new Animated.Value(380));

    const handleBar = () => {
        const toValue = isHiddenBar ? 0 : 380;

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
            <Animated.View style={[styles.subView, { transform: [{ translateY: bounceValue }] }]}>
                <TouchableOpacity style={styles.touchableBar} onPress={() => handleBar()}>
                    <Feather style={styles.horizontalBarIcon} name="minus" size={60} color="black" />
                </TouchableOpacity>
                {barContent}
            </Animated.View>
        </View>
    );
}

export default SlideBarComponent;