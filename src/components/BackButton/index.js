import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import styles from './styles';

const BackButton = ({ callback }) => {

    const handleOnPress = () => {
        callback();
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