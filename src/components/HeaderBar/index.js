import React from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';
import {
    useTheme,
    useNavigation
} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const HeaderBar = ({
    children,
    callback
}) => {

    const { colors } = useTheme();

    const navigation = useNavigation();

    const handleOnPress = () => {
        if (callback) {
            callback();
        } else {
            navigation.goBack();
        }
    }

    return (
        <>
            <TouchableOpacity
                style={[styles.contentIcon, { backgroundColor: colors.secondary }]}
                onPress={() => handleOnPress()}
            >
                <Ionicons
                    style={[styles.icon, { color: colors.primary }]}
                    name="md-arrow-round-back"
                />
            </TouchableOpacity>

            <View style={styles.contentBar}>
                {children && children}
            </View>
        </>
    );
}

export default HeaderBar;