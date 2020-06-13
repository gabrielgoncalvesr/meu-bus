import { StyleSheet } from 'react-native';

import { Dimensions } from "react-native";

const styles = StyleSheet.create({
    content: {
        flex: 1,
        width: '100%'
    },
    titleBar: {
        height: 80,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        color: '#828282',
        fontWeight: 'bold',
    },
});

export default styles;