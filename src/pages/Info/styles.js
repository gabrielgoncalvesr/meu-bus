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
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        elevation: 5,
        shadowRadius: 2,
        shadowOpacity: 0.8,
        shadowColor: '#000',
        backgroundColor: "#f5f5f5",
        shadowOffset: {
            width: 0,
            height: 1
        }
    },
    contentInfo: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ffffff'
    },
    contentText: {
        margin: 20,
    },
    text: {
        fontSize: 15,
        marginTop: 5,
        color: '#999999',
        fontWeight: 'bold',
    }
});

export default styles;