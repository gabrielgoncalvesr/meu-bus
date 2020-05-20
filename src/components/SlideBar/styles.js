import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    touchableBar: {
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    horizontalBarIcon: {
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
        shadowColor: '#000',
        position: "absolute",
        backgroundColor: "#f5f5f5",
        shadowOffset: {
            width: 0,
            height: 1
        }
    }
});

export default styles;