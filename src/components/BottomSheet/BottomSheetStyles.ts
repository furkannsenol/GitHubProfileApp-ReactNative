import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#0D1117',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    title: {
        color: 'white',
        fontWeight: '600',
        fontSize: 15
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    },
    flex1: {
        flex: 1
    },
    buttonCenter: {
        flex: 1,
        marginHorizontal: 2
    },
})

export default styles