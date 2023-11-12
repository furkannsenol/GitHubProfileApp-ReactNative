//FlatList Loading Animation
import React from 'react'
import { SafeAreaView } from 'react-native'
import Spinner from 'react-native-spinkit'
import styles from './FlatListRenderLoaderStyles'

interface IProps {
    isLoading: boolean
}

const FlatListRenderLoader: React.FC<IProps> = ({ isLoading }) => {
    if (isLoading) {
        return (
            <SafeAreaView style={styles.container}>
                <Spinner color='#238636' size={24} type='Wave' isVisible />
            </SafeAreaView>
        )
    }
}

export default FlatListRenderLoader