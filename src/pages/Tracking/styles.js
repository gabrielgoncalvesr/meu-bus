import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    containerMap: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute'
    },
    contentMap: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute'
    },
    descriptionContent: {
        marginTop: 0,
        width: '100%',
    },
    firstContent: {
        height: 30,
        width: '100%',
        marginTop: 40,
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    lastContent: {
        height: 30,
        width: '100%',
        marginBottom: 70,
        alignItems: 'flex-end',
        flexDirection: 'row',
    },
    stopContent: {
        height: 60,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    iconContent: {
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconBar: {
        width: 5,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        fontSize: 10,
        zIndex: 999,
        overflow: 'visible',
        position: 'absolute'
    },
    barContent: {
        height: 100,
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
    informationContent: {
        margin: 5,
        width: '100%',
        flexShrink: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    informationText: {
        fontSize: 16,
    },
    routesContent: {
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'red',
        justifyContent: 'center'
    },
    header: {
        height: 100,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    backIcon: {
        top: 20,
        left: 20,
        width: 45,
        height: 45,
        zIndex: 1000,
        borderRadius: 5,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        fontSize: 25,
    },
});

export default styles;