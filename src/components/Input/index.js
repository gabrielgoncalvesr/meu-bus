import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {
    View,
    TextInput
} from 'react-native';

import styles from './styles';

const Input = ({
    light,
    hasIcon,
    iconType,
    iconSize,
    callback,
    secureText,
    placeholder
}) => {

    const handleTextChange = (value) => {
        callback(value);
    }

    return (
        <View style={[styles.content, { backgroundColor: light ? '#FFFFFF' : '#F5F5F5' }]}>
            {hasIcon &&
                <FontAwesome
                    name={iconType}
                    size={iconSize}
                    style={styles.icon}
                />
            }

            <TextInput
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={secureText}
                onChangeText={value => handleTextChange(value)}
            />
        </View>
    );
}

export default Input;