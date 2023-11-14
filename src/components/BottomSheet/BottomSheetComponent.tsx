import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import styles from './BottomSheetStyles'


interface IProps {
    handleSortByAZ: () => void,
    handleSortByZA: () => void,
    handleSortById: () => void,
    selectedButton: string | null
}

const BottomSheetComponent: React.FC<IProps> = ({ handleSortById, handleSortByAZ, handleSortByZA, selectedButton }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sort by </Text>
            <View style={styles.content}>
                <View style={styles.flex1}>
                    <Button
                        title="Popularity"
                        color={selectedButton === 'id' ? '#238636' : '#238636'}
                        disabled={selectedButton === 'id'}
                        onPress={() => handleSortById()}
                    />
                </View>
                <View style={styles.buttonCenter}>
                    <Button
                        title="A-Z"
                        color={selectedButton == 'az' ? '#238636' : '#238636'}
                        disabled={selectedButton === 'az'}
                        onPress={() => handleSortByAZ()}
                    />
                </View>
                <View style={styles.flex1}>
                    <Button
                        title="Z-A"
                        color={selectedButton === 'za' ? '#238636' : '#238636'}
                        disabled={selectedButton === 'za'}
                        onPress={() => handleSortByZA()}
                    />
                </View>
            </View>
        </View>
    )
}

export default BottomSheetComponent

