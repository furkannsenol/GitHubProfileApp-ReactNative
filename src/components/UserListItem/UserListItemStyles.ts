import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    userContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingHorizontal: 18,
        paddingVertical: 10

    },
    userImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        //backgroundColor: 'grey'
    },
    username: {
        marginTop: 5,
        textAlign: 'center',
        color: '#0D1117',
        fontWeight: '600',
        fontSize: 13
    },
})

export default styles