
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bar: {
        height: 50,
        paddingLeft: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
        elevation: 3,
        shadowRadius: 2,
        shadowOpacity: 0.8,
        shadowColor: '#000',
        backgroundColor: "#f5f5f5",
        shadowOffset: {
            width: 0,
            height: 1
        }
    },
    text: {
        color: '#999999',
        fontWeight: 'bold'
    }
});

export default styles;