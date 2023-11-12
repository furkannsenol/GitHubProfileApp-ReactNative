import { View, FlatList, Text, Image, StyleSheet, Button, ActivityIndicator, SafeAreaView, StatusBar, RefreshControl } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Dispatch } from 'redux'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/configureStore'
import { getUsers, sortUsersByAZ, sortUsersById, sortUsersByZA } from '../../redux/usersSlice'
import UserListItem from '../../components/UserListItem/UserListItemComponent';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import RNPickerSelect from 'react-native-picker-select';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Spinner from 'react-native-spinkit';
import { HomeLayout } from '../../layouts/HomeLayout';
import HomeListHeaderComponent from '../../components/HomeListHeader/HomeListHeaderComponent';
import FlatListRenderLoader from '../../components/FlatListRenderLoader/FlatListRenderLoaderComponent';
const HomeScreen: React.FC = () => {

  //Redux
  const users = useSelector((state: RootState) => state.users.items);
  const isLoading = useSelector((state: RootState) => state.users.isLoading)
  const dispatch: Dispatch<any> = useDispatch()

  //FlatList - Pagination
  const flatListRef = useRef<FlatList | null>(null);
  const itemsPerPage = 9;
  const [page, setPage] = useState(1);
  const [isAddingData, setIsAddingData] = useState(false)

  //useEffects
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch]);

  //Sort by Functions
  const handleSortByAZ = () => {
    dispatch(sortUsersByAZ());
    //flatListRef.current?.scrollToIndex({ index: 0 })
    setPage(1);
  };

  const handleSortByZA = () => {
    dispatch(sortUsersByZA());
    //flatListRef.current?.scrollToIndex({ index: 0 })
    setPage(1);
  };

  const handleSortById = () => {
    dispatch(sortUsersById());
    //flatListRef.current?.scrollToIndex({ index: 0 })
    setPage(1);
  };

  //FlatList Pagination Function
  const onEndReached = () => {
    if (!isAddingData && page < Math.ceil(users.length / itemsPerPage)) {
      setIsAddingData(true);
      setTimeout(() => {
        setPage(page + 1);
        setIsAddingData(false);
      }, 500);
    }
  };

  //VIEW
  return (
    <View style={{ flex: 1 }}>
      <SkeletonContent
        containerStyle={{ flex: 1 }}
        isLoading={isLoading}
        layout={HomeLayout}
      >
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
          ListFooterComponent={
            <FlatListRenderLoader
              isLoading={isAddingData}
            />
          }
          ListHeaderComponent={
            <HomeListHeaderComponent
              handleSortByAZ={handleSortByAZ}
              handleSortByZA={handleSortByZA}
              handleSortById={handleSortById}
            />
          }

        />
      </SkeletonContent >
    </View >
  )
}
const styles = StyleSheet.create({
  skeletonRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
});

export default HomeScreen;
