import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    backIcon: {
        top: 30,
        left: 20,
        width: 40,
        height: 40,
        borderRadius: 5,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#162447',
        zIndex: 1000
    },
    infoBox: {
        height: 320,
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 40,
    },
    functionsBox: {
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
    functionItem: {
        height: 70,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    itemDivisor: {
        borderBottomWidth: 2,
        borderColor: '#f5f5f5',
    },
    contentFunctions: {
        width: '100%',
        flex: 1,
        backgroundColor: '#ffffff'
    },
    divisorBar: {
        height: 50,
        paddingLeft: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    divisorBarText: {
        color: '#999999',
        fontWeight: 'bold'
    },
    functionItemIcon: {
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    functionItemText: {
        fontSize: 16,
        color: '#162447',
        fontWeight: 'bold',
        textAlign: 'right'
    },
    infoName: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoNameText: {
        fontSize: 20,
        color: '#162447',
        fontWeight: 'bold'
    },
    infoIcon: {
        width: 200,
        height: 200,
        borderRadius: 200 / 2,
        borderColor: "#162447",
        borderWidth: 3
    }
});

export default styles;