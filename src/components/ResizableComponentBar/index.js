import React, { Component, useState, useRef } from 'react';
import { StyleSheet, View, Dimensions, PanResponder, Animated } from 'react-native';

import styles from './styles';
import { set } from 'react-native-reanimated';

import Map from '../map';

const ResizableComponentBar = () => {

    const [topHeight, setTopHeight] = useState(40);
    const [bottomHeight, setBottomHeight] = useState(40);
    const [deviceHeight, setDeviceHeight] = useState(Dimensions.get('window').height);
    const [isDividerClicked, setIsDividerClicked] = useState(false);



    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: () => true,

            onPanResponderGrant: (e, gestureState) => {
                console.log("TESTE2")
                setIsDividerClicked(true)
            },


            onPanResponderMove: (e, gestureState) => {
                console.log(gestureState.moveY > (deviceHeight - 40) ? 40 : deviceHeight - gestureState.moveY)
                setBottomHeight(gestureState.moveY > (deviceHeight - 40) ? 40 : deviceHeight - gestureState.moveY);
            },

            onPanResponderRelease: (e, gestureState) => {
                console.log("TESTE1")
                setIsDividerClicked(false)
            }
        })
    ).current;


    return (
        <View style={styles.content}>
            <Animated.View style={[{ minHeight: 400, flex: 1 }, { height: topHeight }]}>
            </Animated.View>


            <Animated.View style={[{ backgroundColor: 'green', minHeight: 100 }, { height: bottomHeight }]}  {...panResponder.panHandlers} >
            </Animated.View>
        </View>
    )

}

export default ResizableComponentBar;