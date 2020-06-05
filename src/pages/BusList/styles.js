import { StyleSheet } from 'react-native';

import { Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    searchBar: {
        height: 70,
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
    },
    iconArea: {
        width: 50,
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#828282'
    },
    divisorBar: {
        height: 50,
        paddingLeft: 20,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    contentResults: {
        width: '100%',
        flex: 1,
        backgroundColor: '#ffffff'
    },
    busItem: {
        height: 70,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    busIdentificationBox: {
        width: 60,
        height: 40,
        borderRadius: 5,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    busIdentificationText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    touchableArea: {
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    busInformationBox: {
        flexShrink: 1,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    busInformationText: {
        fontSize: 16,
        color: '#828282'
    },
    busIconBox: {
        width: 30,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemDivisor: {
        borderBottomWidth: 2,
        borderColor: '#f5f5f5',
    },
    divisorBarText: {
        color: '#999999',
        fontWeight: 'bold'
    }
});

export default styles;