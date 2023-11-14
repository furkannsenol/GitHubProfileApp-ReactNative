import React from 'react';
import { View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './HomeListHeaderStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


interface IProps {
    handleSortByAZ: () => void,
    handleSortByZA: () => void,
    handleSortById: () => void,
}

const HomeListHeaderComponent: React.FC<IProps> = ({ handleSortByAZ, handleSortByZA, handleSortById }) => {

    
    return (
        <View style={styles.container}>
            <Text style={styles.leftText}>Popular Top 100 Users!</Text>
            {/* <RNPickerSelect
                onValueChange={(value) => {
                    if (value === 'az') {
                        handleSortByAZ();
                    } else if (value === 'za') {
                        handleSortByZA();
                    } else {
                        handleSortById();
                    }
                }}
                items={[
                    { label: 'Popularity', value: 'id', },
                    { label: 'A-Z', value: 'az' },
                    { label: 'Z-A', value: 'za' },
                ]}
                placeholder={styles.placeHolder}
                useNativeAndroidPickerStyle={false}
                fixAndroidTouchableBug={true}
                style={{
                    inputIOS: styles.IOS,
                    inputAndroid: styles.android,
                }}
            /> */}
            <Text> Sort by <MaterialCommunityIcons name='sort' color='#238636' size={15} /></Text>
        </View>
    )
}

export default HomeListHeaderComponent