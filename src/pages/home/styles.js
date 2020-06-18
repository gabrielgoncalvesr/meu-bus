import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content: {
        height: '100%'
    },
    userIconContent: {
        top: 20,
        right: 20,
        position: 'absolute',
    },
    userIcon: {
        fontSize: 45
    },
    barContent: {
        height: 130,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    button: {
        width: 100,
        height: 90,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    icon: {
        fontSize: 25
    },
    iconContent: {
        height: 45,
    },
    contentMap: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute'
    },
    historyContent: {
        height: '100%'
    }
});

export default styles;