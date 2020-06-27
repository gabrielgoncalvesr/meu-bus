import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const CheckBox = ({ name, label, value, callback }) => {

    const { colors } = useTheme();

    const handleChange = () => {
        if (callback) {
            callback(name);
        }
    }

    return (
        <View style={styles.content}>
            <TouchableOpacity
                onPress={handleChange}
                style={[styles.checkbox, { borderColor: colors.text }]}
            >
                {
                    value &&
                    <FontAwesome5
                        name="check"
                        style={[styles.icon, { color: colors.text }]}
                    />
                }
            </TouchableOpacity>

            {
                label &&
                <Text style={[styles.label, { color: colors.text }]}>
                    {"TESTE"}
                </Text>
            }
        </View>
    );
}

export default CheckBox;