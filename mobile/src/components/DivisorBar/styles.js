
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    bar: {
        height: 40,
        elevation: 5,
        paddingLeft: 20,
        shadowRadius: 2,
        shadowOpacity: 0.8,
        alignItems: 'flex-start',
        justifyContent: 'center',
        shadowOffset: {
            width: 0,
            height: 1
        }
    },
    text: {
        fontWeight: 'bold'
    }
});

export default styles;