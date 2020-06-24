
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content: {
        flex: 1,
        width: '100%',
    },
    barContent: {
        height: 65,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
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
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    informationContent: {
        margin: 5,
        flexShrink: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    informationText: {
        fontSize: 16,
    },
    iconContent: {
        width: 30,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        fontSize: 25
    }
});

export default styles;