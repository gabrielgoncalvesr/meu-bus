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
        width: 90,
        height: 90,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2b2e4a'
    },
    buttonTitle: {
        fontSize: 14,
        color: '#d1d1d1',
        fontWeight: 'bold'
    },
    buttonIcon: {
        color: '#d1d1d1',
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
    backIcon: {
        top: 30,
        left: 20,
        width: 40,
        height: 40,
        borderRadius: 5,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    }
});

export default styles;