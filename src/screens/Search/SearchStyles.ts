import { StyleSheet } from "react-native"
import { statusBarHeight } from "../../utils/constants"

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor:'#0D1117'
    },
    headerContainer: {
        flex: 1,
        paddingTop: statusBarHeight + 20,
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        tintColor: 'white'
    },
    bodyContainer: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'yellow',
        paddingTop: '10%'
    },
    inputContent: {
        borderWidth: 1,
        borderColor: '#238636',
        width: '80%',
        borderRadius: 20,
        paddingHorizontal: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'white'
    },
    input: {
        flex: 1,
        fontSize: 15,
        fontWeight: '500',
        color: '#0D1117',

    },
    button: {
        //marginHorizontal: '10%',
        width: '80%',
        //justifyContent: 'center'
        paddingTop: 10,
    }
})

export default styles