

import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import ItemDivisor from '../ItemDivisor';

import styles from './styles';

const ButtonBar = ({
    text,
    iconType,
    callback
}) => {

    const handleBarPress = () => {
        callback();
    }

    return (
        <>
            <TouchableOpacity
                style={styles.content}
                onPress={() => handleBarPress()}
            >
                <View style={styles.iconContent}>
                    <FontAwesome5
                        name={iconType}
                        style={styles.icon}
                    />
                </View>

                <Text style={styles.text}>
                    {text}
                </Text>
            </TouchableOpacity>

            <ItemDivisor />
        </>
    );
}

export default ButtonBar;