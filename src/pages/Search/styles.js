import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { Dimensions } from "react-native";

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

console.log(width)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    divisorBar: {
        height: 50,
        paddingLeft: 20,
        alignItems: 'flex-start',
        justifyContent: 'center'
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
    searchIcon: {
        color: '#bdbdbd',
        padding: 12
    },
    searchArea: {
        flexDirection: 'row',
        backgroundColor: '#f5f5f5'
    },
    searchInput: {
        flex: 1,
        fontWeight: 'bold',
        color: '#595959',
        fontSize: 18
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
        //backgroundColor: '#17347a',
    },
    busIconBox: {
        width: 30,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    busIdentificationText: {
        fontSize: 14,
        color: '#ffffff',
        fontWeight: 'bold',
    },
    itemDivisor: {
        borderBottomWidth: 2,
        borderColor: '#f5f5f5',
    },
    busInformationBox: {
        // backgroundColor: '#bbb',
        //width: width,
        // height: 60,
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
    touchableArea: {
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});

export default styles;