import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const CheckBox = ({
    name,
    label,
    value,
    callback,
}) => {

    const handleChange = () => {
        if (callback) {
            callback(name);
        }
    }

    return (
        <View style={styles.content}>
            <TouchableOpacity
                onPress={handleChange}
                style={styles.checkbox}
            >
                {
                    value &&
                    <FontAwesome5
                        name="check"
                        style={styles.icon}
                    />
                }

            </TouchableOpacity>

            {
                label &&
                <Text style={styles.label}>
                    {label}
                </Text>
            }
        </View>
    );
}

export default CheckBox;