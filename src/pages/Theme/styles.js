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
        height: 60,
        marginLeft: 20,
        marginRight: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon: {
        fontSize: 30,
        marginLeft: 5,
        marginRight: 20,
    },
    themeContent: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 14,
        textAlign: 'right',
        fontWeight: 'bold',
    }
});

export default styles;