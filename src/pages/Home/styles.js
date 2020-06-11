import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerAction: {
        height: '100%',
        borderRadius: 5
    },
    containerMap: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute'
    },
    actionBar: {
        height: 130,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    buttonFunction: {
        width: 100,
        height: 90,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#162447'
    },
    buttonTitle: {
        fontSize: 14,
        color: '#e6eef5',
        fontWeight: 'bold',
    },
    buttonIcon: {
        color: '#e6eef5',
    },
    buttonIconBar: {
        height: 45,
    },
    contentMap: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute'
    },
    divisorBar: {
        height: 50,
        paddingLeft: 20,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    userIcon: {
        top: 15,
        right: 15,
        position: 'absolute'
    }
});

export default styles;