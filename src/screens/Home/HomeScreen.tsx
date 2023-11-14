import { View, FlatList, Text, Image, StyleSheet, Button, Pressable } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Dispatch } from 'redux'
import { useSelector, useDispatch } from 'react-redux';
import BottomSheet from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
//import RNPickerSelect from 'react-native-picker-select';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import Spinner from 'react-native-spinkit';

import { RootState } from '../../redux/configureStore'
import { getUsers, sortUsersByAZ, sortUsersById, sortUsersByZA } from '../../redux/usersSlice'
import UserListItem from '../../components/UserListItem/UserListItemComponent';
import { HomeLayout } from '../../layouts/HomeLayout';
//import HomeListHeaderComponent from '../../components/HomeListHeader/HomeListHeaderComponent';
import FlatListRenderLoader from '../../components/FlatListRenderLoader/FlatListRenderLoaderComponent';
//import { statusBarHeight } from '../../utils/constants';
import BottomSheetComponent from '../../components/BottomSheet/BottomSheetComponent';
import styles from './HomeStyles';


const HomeScreen: React.FC = () => {

  //Redux
  const users = useSelector((state: RootState) => state.users.items);
  const isLoading = useSelector((state: RootState) => state.users.isLoading)
  const dispatch: Dispatch<any> = useDispatch()

  //FlatList - Pagination
  //const flatListRef = useRef<FlatList | null>(null);
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
    setSelectedButton('az')
    bottomSheetRef.current?.close()
  };

  const handleSortByZA = () => {
    dispatch(sortUsersByZA());
    //flatListRef.current?.scrollToIndex({ index: 0 })
    setPage(1);
    setSelectedButton('za')
    bottomSheetRef.current?.close()
  };

  const handleSortById = () => {
    dispatch(sortUsersById());
    //flatListRef.current?.scrollToIndex({ index: 0 })
    setPage(1);
    setSelectedButton('id')
    bottomSheetRef.current?.close()
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

  //BottomSheet
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const [selectedButton, setSelectedButton] = useState<string | null>('id');

  const handleBottomSheet = () => {
    bottomSheetRef.current?.expand();
  }

  //VIEW
  return (

    <SkeletonContent
      containerStyle={styles.flex1}
      isLoading={isLoading}
      layout={HomeLayout}
    >

      <GestureHandlerRootView style={styles.flex1}>

        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Popular Top 100 Users!</Text>
          <Pressable onPress={handleBottomSheet}>
            <Text style={styles.headerSortBy}> Sort by <MaterialCommunityIcons name='sort' color='#238636' size={18} /></Text>
          </Pressable>
        </View>

        <FlatList
          style={styles.flatListStyle}
          data={users.slice(0, page * itemsPerPage)}
          renderItem={({ item, index }) => (
            <UserListItem user={item} />
          )}
          //keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          //contentContainerStyle={{ paddingBottom: 100 }}
          //ref={flatListRef}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.1}
          ListFooterComponent={
            <FlatListRenderLoader
              isLoading={isAddingData}
            />
          }
          contentContainerStyle={{
            // flexDirection: 'row',
            // flexWrap: 'wrap',
            //alignItems: 'center',
            //backgroundColor: 'red',
            //padding: 8,
          }}
        // ListHeaderComponent={
        //   <HomeListHeaderComponent
        //     handleSortByAZ={handleSortByAZ}
        //     handleSortByZA={handleSortByZA}
        //     handleSortById={handleSortById}
        //   />
        // }
        />

        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={[130]}
          // onChange={(index) => { console.log('Bottom Sheet Index:', index);}}
          enablePanDownToClose={true}
          animateOnMount={true}
          handleStyle={{ backgroundColor: '#0D1117' }}
          handleIndicatorStyle={{ backgroundColor: 'white' }}
          backgroundStyle={{ backgroundColor: '#0D1117' }}
        >
          <BottomSheetComponent
            handleSortByAZ={handleSortByAZ}
            handleSortByZA={handleSortByZA}
            handleSortById={handleSortById}
            selectedButton={selectedButton}
          />
        </BottomSheet>

      </GestureHandlerRootView>
    </SkeletonContent >
  )
}


export default HomeScreen;
