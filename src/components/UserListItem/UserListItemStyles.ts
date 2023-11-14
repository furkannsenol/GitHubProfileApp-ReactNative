import { StyleSheet } from "react-native";
import { windowWidth } from "../../utils/constants";

const styles = StyleSheet.create({
    userContainer: {
        //flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        //paddingHorizontal: 18,
        // paddingVertical: 10,
        marginVertical:8,
        width: windowWidth / 3,
        //backgroundColor:'yelow'
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