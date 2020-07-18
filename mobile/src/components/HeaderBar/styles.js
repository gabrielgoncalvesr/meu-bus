
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    contentIcon: {
        top: 20,
        left: 20,
        width: 45,
        height: 45,
        zIndex: 1000,
        borderRadius: 5,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        fontSize: 25,
    },
    contentBar: {
        height: 85,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;