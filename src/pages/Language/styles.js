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
        backgroundColor: "#f5f5f5",
        justifyContent: 'flex-end',
    },
    contentItem: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ffffff'
    },
    item: {
        height: 80,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icon: {
        width: 40,
        height: 40,
        marginRight: 10
    },
    iconContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 14,
        color: '#162447',
        fontWeight: 'bold',
        textAlign: 'right'
    }
});

export default styles;