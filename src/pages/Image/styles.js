import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content: {
        flex: 1,
        width: '100%',
    },
    userBar: {
        height: 85,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    contentImages: {
        flex: 1,
        width: '100%',
    },
    userIcon: {
        width: 120,
        margin: 20,
        height: 120,
        borderWidth: 2,
        borderRadius: 120 / 2,
        backgroundColor: 'red'
    },
    imageLine: {
        flexDirection: 'row',
    },
    imageGrid: {
        width: '100%',
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;