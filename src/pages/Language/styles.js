import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content: {
        flex: 1,
        width: '100%',
    },
    contentItem: {
        flex: 1,
        width: '100%',
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
        width: 35,
        height: 25,
        marginRight: 10,
    },
    iconContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'right'
    }
});

export default styles;