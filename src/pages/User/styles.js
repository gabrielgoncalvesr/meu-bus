import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content: {
        flex: 1,
        width: '100%',
    },
    userBar: {
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
    contentFunctions: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ffffff'
    },
    userName: {
        fontSize: 20,
        color: '#162447',
        fontWeight: 'bold'
    },
    userIcon: {
        width: 65,
        height: 65,
        margin: 10,
        borderWidth: 2,
        borderRadius: 65 / 2,
        borderColor: "#162447"
    }
});

export default styles;