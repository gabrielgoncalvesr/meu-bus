import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    touchableBar: {
        height: 31,
        elevation: 2,
        shadowRadius: 2,
        shadowOpacity: 0.8,
        alignItems: 'center',
        shadowColor: '#000000',
        justifyContent: 'center',
        shadowOffset: {
            width: 0,
            height: 1
        }
    },
    icon: {
        fontSize: 60,
        color: '#adadad',
        borderRadius: 10,
    },
    subView: {
        left: 0,
        right: 0,
        bottom: 0,
        elevation: 5,
        shadowRadius: 2,
        shadowOpacity: 0.8,
        position: "absolute",
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 1
        }
    }
});

export default styles;