import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    leftText: {
        fontSize: 18,
        color: '#238636',
        fontWeight: '600'
    },
    placeHolder: {
        label: 'Sort your result by',
        value: null,
        color: 'grey',
        inputLabel: 'Sort by'
    },
    IOS: {
        fontSize: 15,
        color: '#238636',
        padding: -100,
        fontWeight: '600'
    },
    android: {
        fontSize: 15,
        color: '#238636',
        padding: -100,
        fontWeight: '600'
    }
})

export default styles