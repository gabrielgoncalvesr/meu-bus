import React, { useState } from 'react';
import { View, Animated, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import styles from './styles';

const SlideBarComponent = ({ mainContent, barContent }) => {

    const [isHiddenBar, setIsHiddenBar] = useState(false);
    const [bounceValue, setBounceValue] = useState(new Animated.Value(300));

    const handleBar = () => {
        const toValue = isHiddenBar ? 0 : 300;

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
                <TouchableOpacity onPress={() => handleBar()}>
                    {
                        isHiddenBar &&
                        <AntDesign name="up" size={34} color="black" />
                    }
                    {
                        !isHiddenBar &&
                        <AntDesign name="down" size={34} color="black" />
                    }

                    {barContent}
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
}

export default SlideBarComponent;