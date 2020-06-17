import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content: {
        flex: 1,
        width: '100%',
    },
    bar: {
        height: 85,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    itemsBox: {
        flex: 1,
        elevation: 5,
        width: '100%',
        shadowRadius: 2,
        shadowOpacity: 0.8,
        alignItems: 'center',
        shadowColor: '#000000',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        shadowOffset: {
            width: 0,
            height: 1
        }
    },
    contentFunctions: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF'
    },
    contentText: {
        margin: 20,
    },
    text: {
        fontSize: 15,
        marginTop: 5,
        color: '#FFF',
        fontWeight: 'bold',
    }
});

export default styles;