import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IUser from '../models/UserModel'
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigation/navigationTypes'

interface IProps {
  user: IUser
}

const UserListItem: React.FC<IProps> = ({ user }) => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const listToDetail = () => {
    navigation.navigate('HomeStack', {
      screen: 'UserDetailScreen',
      params: { user }
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

const styles = StyleSheet.create({
  userContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 10

  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor:'grey'
  },
  username: {
    marginTop: 5,
    textAlign: 'center',
    color: '#171515',
    fontWeight: '600',
    fontSize: 13
  },
})