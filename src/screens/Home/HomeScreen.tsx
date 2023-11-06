import { View, FlatList, Text, Image, StyleSheet, Button, ActivityIndicator, SafeAreaView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Dispatch } from 'redux'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/configureStore'
import { getUsers, sortUsersByAZ, sortUsersById, sortUsersByZA } from '../../redux/usersSlice'
import IUser from '../../models/UserModel';
import UserListItem from '../../components/UserListItemComponent';

const HomeScreen: React.FC = () => {

  const users = useSelector((state: RootState) => state.users.items);
  const isLoading = useSelector((state: RootState) => state.users.isLoading)
  const dispatch: Dispatch<any> = useDispatch()

  const flatListRef = useRef<FlatList | null>(null);
  const itemsPerPage = 12;
  const [page, setPage] = useState(1);
  const [isAddingData, setIsAddingData] = useState(false)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch]);

  const handleSortByAZ = () => {
    dispatch(sortUsersByAZ());
    flatListRef.current?.scrollToIndex({ index: 0 })
    setPage(1);
  };

  const handleSortByZA = () => {
    dispatch(sortUsersByZA());
    flatListRef.current?.scrollToIndex({ index: 0 })
    setPage(1);
  };


  const handleSortById = () => {
    dispatch(sortUsersById());
    flatListRef.current?.scrollToIndex({ index: 0 })
    setPage(1);
  };

  const onEndReached = () => {
    if (!isAddingData && page < Math.ceil(users.length / itemsPerPage)) {
      setIsAddingData(true);
      setTimeout(() => {
        setPage(page + 1);
        setIsAddingData(false);
      }, 500);
    }
  };

  // const renderUserItem = ({ item }: { item: IUser }) => {
  //   return (
  //     <View style={styles.userContainer}>
  //       <View key={item.id}>
  //         <Image source={{ uri: item.avatar_url }} style={styles.userImage} />
  //         <Text style={styles.username}>{item.login}</Text>
  //       </View>
  //     </View>
  //   );
  // }
  const renderLoader = () => {
    if (isAddingData) {
      return (
        <ActivityIndicator size={'large'} />
      )
    }
  }

  if (isLoading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} />
      </SafeAreaView>
    );
  }

  return (
    <View style={{ flex: 1 }}>


      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button title='A-Z' onPress={handleSortByAZ} />
        <Button title='Z-A' onPress={handleSortByZA} />
        <Button title='popular' onPress={handleSortById} />


      </View>
      <Text>Popular</Text>
      <FlatList
        data={users.slice(0, page * itemsPerPage)}
        renderItem={({ item, index }) => (
          <UserListItem user={item} />
        )}
        //keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        //contentContainerStyle={{ paddingBottom: 100 }}
        ref={flatListRef}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderLoader}
        ListHeaderComponent={<Text>Popular</Text>}
      />

    </View>
  )
}

const styles = StyleSheet.create({

});

export default HomeScreen;
