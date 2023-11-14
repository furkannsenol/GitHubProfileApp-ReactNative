import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IUser from '../../models/UserModel'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation/navigationTypes'
import styles from './UserListItemStyles'
import IUserFollowers from '../../models/UserFollowersModel'

interface IProps {
  user: IUserFollowers
}

const UserListItem: React.FC<IProps> = ({ user }) => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const listToDetail = () => {
    navigation.navigate('HomeStack', {
      screen: 'UserDetailScreen',
      params: { userName: user.login }
    })
  }

  return (
    <Pressable onPress={() => listToDetail()}>
      <View style={styles.userContainer}>
        <View key={user.id}>
          <Image source={{ uri: user.avatar_url }} style={styles.userImage} />
          <Text style={styles.username}>
            {user.login.length > 17 ? `${user.login.substring(0, 17)}...` : user.login}
          </Text>
        </View>
      </View>
    </Pressable>
  )
}

export default UserListItem

