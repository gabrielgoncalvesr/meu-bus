import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content: {
        flexDirection: "row",
        alignItems: "center"
    },
    checkbox: {
        width: 25,
        height: 25,
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        borderColor: '#162447'
    },
    label: {
        color: '#162447',
        marginLeft: 6
    },
    icon: {
        fontSize: 16,
        color: '#162447'
    }
});

export default styles;