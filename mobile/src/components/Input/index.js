import React from 'react';
import { View, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { getThemeColors } from '../../util/appContext';

import styles from './styles';

const Input = ({ light, hasIcon, iconType, iconSize, callback, secureText, placeholder }) => {

    const colors = getThemeColors();

    const handleTextChange = (value) => {
        callback(value);
    }

    return (
        <View style={[styles.content, { backgroundColor: colors.card }]}>
            {hasIcon && (
                <FontAwesome
                    name={iconType}
                    size={iconSize}
                    color={colors.cardText}
                    style={styles.icon}
                />
            )}

            <TextInput
                style={[styles.input, { color: colors.cardText }]}
                placeholder={placeholder}
                secureTextEntry={secureText}
                onChangeText={value => handleTextChange(value)}
            />
        </View>
    );
}

export default Input;