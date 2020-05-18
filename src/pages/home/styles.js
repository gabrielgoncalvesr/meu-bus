import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },

    boxSearch: {
        backgroundColor: '#393e46',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    actionBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },






    searchInput: {
        backgroundColor: '#393e46',
        width: '100%',
        height: 50,
        borderRadius: 5,
        paddingLeft: 15,
        fontSize: 18,
        color: '#fff'
    },
    buttonFunction: {
        backgroundColor: '#00adb5',
        width: 90,
        height: 90,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#414141'
    },
    buttonIconBar: {
        height: 45
    },
    contentMap: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute'
    },

    contentHome: {
        position: 'absolute',
        top: 500,
        left: 0,
        right: 0,
        height: '100%',
        borderRadius: 5,
        backgroundColor: '#393e46',
    },







    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: "#ffffff",
        marginBottom: 16,
    },
    heroTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#737380',
        marginTop: 16
    },
    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    action: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'

    },
    actionText: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 'bold'

    },
});

export default styles;