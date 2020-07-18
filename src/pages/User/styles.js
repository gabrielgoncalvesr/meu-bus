import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content: {
        flex: 1,
        width: '100%',
    },
    userBar: {
        height: 85,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    contentFunctions: {
        flex: 1,
        width: '100%',
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    userIcon: {
        width: 65,
        height: 65,
        margin: 10,
        borderWidth: 2,
        borderRadius: 65 / 2
    }
});

export default styles;