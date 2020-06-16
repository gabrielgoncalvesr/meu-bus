import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const BackButton = ({ callback }) => {

    const navigation = useNavigation();

    const handleOnPress = () => {
        if (callback) {
            callback();
        } else {
            navigation.goBack();
        }
    }

    return (
        <TouchableOpacity
            style={styles.content}
            onPress={() => handleOnPress()}
        >
            <Ionicons
                style={styles.icon}
                name="md-arrow-round-back"
            />
        </TouchableOpacity>
    );
}

export default BackButton;