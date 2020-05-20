import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#bbb'
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
    searchBar: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    }
});

export default styles;