import { StyleSheet } from "react-native"
import { statusBarHeight } from "../../utils/constants";

const styles = StyleSheet.create({
    flex1: {
        flex: 1
    },
    //header
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: statusBarHeight,
        paddingHorizontal: 20,
        paddingBottom: 20,
        alignItems: 'center',
        backgroundColor: '#0D1117'
    },
    headerText: {
        fontSize: 18,
        color: '#238636',
        fontWeight: '600'
    },
    headerSortBy: {
        color: 'white'
    },
    //Bottom Sheet
    flatListStyle: {
        zIndex: -1,
        paddingBottom: 10,
        //paddingTop:2
    },
    skeletonRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingHorizontal: 18,
        paddingVertical: 10,
    },
});

export default styles