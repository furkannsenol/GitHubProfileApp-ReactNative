import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Image, Pressable, } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList, SearchTabParamList } from '../../navigation/navigationTypes'
import { statusBarHeight } from '../../utils/constants'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './SearchStyles'

const SearchScreen = () => {
  const [inputUserName, setInputUserName] = useState<string>('')


  const navigation = useNavigation<NativeStackNavigationProp<SearchTabParamList>>()

  const listToDetail = () => {
    navigation.navigate('UserDetailScreen', {
      userName: inputUserName
    })
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../../assets/images/GitHub-Logo.png')}
          style={styles.image} />
      </View>
      <View style={styles.bodyContainer}>

        <View style={styles.inputContent}>
          <TextInput
            value={inputUserName}
            //autoFocus
            onChangeText={setInputUserName}
            placeholder='Enter a username..'
            underlineColorAndroid='transparent'
            returnKeyType='search'
            multiline={false}
            style={styles.input}
            placeholderTextColor='#238636'
            //disableFullscreenUI
            onSubmitEditing={() => listToDetail()}
          />
          {inputUserName !== '' && (
            <Pressable onPress={() => setInputUserName('')}>
              <MaterialCommunityIcons name="close-circle" size={20} color="#238636" />
            </Pressable>
          )}
        </View>

        <View style={styles.button}>
          <Button title='SEARCH ' onPress={() => listToDetail()} color={'#238636'} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SearchScreen
