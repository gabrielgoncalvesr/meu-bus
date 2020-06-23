import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    map: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute'
    },
    stopBusImg: {
        width: 30,
        height: 30
    },
    stopBusCircle: {
        margin: 0,
        padding: 0,
        width: 16,
        height: 16,
        borderRadius: 16 / 2,
        borderWidth: 3
    }
});

export default styles;