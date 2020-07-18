import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxContent: {
        width: '80%',
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        height: 45,
        marginTop: 10
    },
    inputContent: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 315,
        height: 45,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold'
    }, 
    newAccountIcon: {
        padding: 12,
        color: '#162447',
    },
    newAccountContent: {
        marginTop: 40,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    infoText: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    forgotContent: {
        width: '100%',
        marginTop: 20,
        marginBottom: 30,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    applicationIcon: {
        width: 220,
        height: 80,
    }
});

export default styles;