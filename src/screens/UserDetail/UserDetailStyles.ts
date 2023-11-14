import { StyleSheet } from "react-native"
import { statusBarHeight } from "../../utils/constants"

const styles = StyleSheet.create({

    //Main
    mainContainer: {
        flex: 1,
    },

    //Header
    headerContainer: {
        flex: .8,
        backgroundColor: '#0D1117',
        //padding: 20,
        paddingHorizontal: 20
    },
    headerButtonsContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: statusBarHeight,
        //backgroundColor: 'red',
    },
    headerButtonBackground: {
        backgroundColor: '#293548',
        //#1f2938
        padding: 10,
        borderRadius: 24
    },
    headerContent: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: 'grey'
    },
    headerTextContent: {
        flexDirection: 'column',
        paddingLeft: 20,
        flex: 1
    },
    headerTextName: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
        marginBottom: 5
    },
    headerTextLogin: {
        color: '#238636',
        marginBottom: 10,
        fontSize: 14,
        fontWeight: '600'
    },
    headerBioContent: {
        alignItems: 'center',
        marginTop: 20
    },
    headerBioText: {
        color: 'grey',
        fontSize: 14,
        letterSpacing: 2
    },
    headerSummaryContainer: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 20
    },
    headerSummaryContent: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    headerSummaryNumber: {
        color: 'white',
        fontSize: 18
    },
    headerSummaryText: {
        color: 'grey',
        fontSize: 13,
        letterSpacing: 1
    },
    headerSummaryBorder: {
        borderWidth: .5,
        height: '50%',
        borderColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    headerButton: {
        marginHorizontal: '10%',
        marginTop: -20,
        flex: 1,
        justifyContent: 'center'
    },

    //Body
    bodyContainer: {
        flex: .3,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        marginTop: -20,
        backgroundColor: 'white'
    }
})

export default styles