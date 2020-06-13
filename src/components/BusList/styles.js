
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ffffff'
    },
    barContent: {
        height: 65,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    tagContent: {
        width: 60,
        height: 40,
        margin: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tagText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    touchableArea: {
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    informationContent: {
        flexShrink: 1,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    informationText: {
        fontSize: 16,
        color: '#828282'
    },
    iconContent: {
        width: 30,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        fontSize: 25,
        color: '#828282'
    }
});

export default styles;