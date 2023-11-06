import { View, FlatList, Text, Image, StyleSheet, Button, ActivityIndicator, SafeAreaView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Dispatch } from 'redux'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/configureStore'
import { getUsers, sortUsersByAZ, sortUsersById, sortUsersByZA } from '../../redux/usersSlice'
import UserListItem from '../../components/UserListItemComponent';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import RNPickerSelect from 'react-native-picker-select';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen: React.FC = () => {

  //Redux
  const users = useSelector((state: RootState) => state.users.items);
  const isLoading = useSelector((state: RootState) => state.users.isLoading)
  const dispatch: Dispatch<any> = useDispatch()

  //FlatList - Pagination
  const flatListRef = useRef<FlatList | null>(null);
  const itemsPerPage = 12;
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

  //FlatList Last Item Function
  const onEndReached = () => {
    if (!isAddingData && page < Math.ceil(users.length / itemsPerPage)) {
      setIsAddingData(true);
      setTimeout(() => {
        setPage(page + 1);
        setIsAddingData(false);
      }, 500);
    }
  };

  //FlatList Loading Animation
  const renderLoader = () => {
    if (isAddingData) {
      return (
        <ActivityIndicator size={'large'} />
      )
    }
  }

  //Title and Sortby Component
  const listHeaderComponent = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, }}>
        <Text style={{ fontSize: 18, color: '#238636', fontWeight: '600' }}>Popular Top 100 Users!</Text>
        <RNPickerSelect
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
          placeholder={{ label: 'Sort your result by', value: null, color: 'grey', inputLabel: 'Sort by' }}

          useNativeAndroidPickerStyle={false}
          fixAndroidTouchableBug={true}
          style={{
            inputIOS: {
              fontSize: 15,
              color: '#238636 ',
              padding: -100,
              fontWeight: '600'
            },
            inputAndroid: {
              fontSize: 15,
              color: '#238636',
              padding: -100,
              fontWeight: '600'
            },

          }}
        />
      </View>
    )
  }

  //VIEW
  return (
    <View style={{ flex: 1 }}>
      <SkeletonContent
        containerStyle={{ flex: 1 }}
        isLoading={isLoading }
        layout={[
          {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems:'center',
            margin: 20,
            children: [
              {
                width: '65%',
                height: 40,
              },
              {
                width: '25%',
                height: 30,
              },
            ],
          },
          {

            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',

            children: [
              {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                paddingHorizontal: 18,
                paddingVertical: 10,
                children: [
                  {
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                  },
                  {
                    width: 100,
                    height: 30,
                    marginTop: 5,
                  }
                ],
              },
              {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                paddingHorizontal: 18,
                paddingVertical: 10,
                children: [
                  {
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                  },
                  {
                    width: 100,
                    height: 30,
                    marginTop: 5,
                  }
                ],

              },
              {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                paddingHorizontal: 18,
                paddingVertical: 10,
                children: [
                  {
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                  },
                  {
                    width: 100,
                    height: 30,
                    marginTop: 5,
                  }
                ],

              },

            ]
          },
          {

            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',

            children: [
              {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                paddingHorizontal: 18,
                paddingVertical: 10,
                children: [
                  {
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                  },
                  {
                    width: 100,
                    height: 30,
                    marginTop: 5,
                  }
                ],
              },
              {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                paddingHorizontal: 18,
                paddingVertical: 10,
                children: [
                  {
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                  },
                  {
                    width: 100,
                    height: 30,
                    marginTop: 5,
                  }
                ],

              },
              {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                paddingHorizontal: 18,
                paddingVertical: 10,
                children: [
                  {
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                  },
                  {
                    width: 100,
                    height: 30,
                    marginTop: 5,
                  }
                ],

              },

            ]
          },
          {

            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',

            children: [
              {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                paddingHorizontal: 18,
                paddingVertical: 10,
                children: [
                  {
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                  },
                  {
                    width: 100,
                    height: 30,
                    marginTop: 5,
                  }
                ],
              },
              {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                paddingHorizontal: 18,
                paddingVertical: 10,
                children: [
                  {
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                  },
                  {
                    width: 100,
                    height: 30,
                    marginTop: 5,
                  }
                ],

              },
              {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                paddingHorizontal: 18,
                paddingVertical: 10,
                children: [
                  {
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                  },
                  {
                    width: 100,
                    height: 30,
                    marginTop: 5,
                  }
                ],

              },
              

            

            ]
          },
        ]}
      >


        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button title='A-Z' onPress={handleSortByAZ} />
          <Button title='Z-A' onPress={handleSortByZA} />
          <Button title='popular' onPress={handleSortById} />
        </View> */}


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
          ListHeaderComponent={listHeaderComponent}
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
