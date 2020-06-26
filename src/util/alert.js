import React from 'react';
import { Alert } from 'react-native';

const alert = (title, errorMessage) => {
    Alert.alert(
        title,
        errorMessage,
        [
            { text: "OK", onPress: () => { return; } }
        ],
        { cancelable: false }
    );
}

export default alert;