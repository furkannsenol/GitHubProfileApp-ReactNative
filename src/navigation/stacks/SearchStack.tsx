import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SearchTabParamList } from '../navigationTypes';

import UserDetailScreen from '../../screens/UserDetail/UserDetailScreen';
import UserFollowersScreen from '../../screens/UserFollowers/UserFollowersScreen';
import SearchScreen from '../../screens/Search/SearchScreen';

const SearchStackScreens = createNativeStackNavigator<SearchTabParamList>();

const SearchStack = () => {
    return (
        <>
            <SearchStackScreens.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <SearchStackScreens.Screen
                    name="SearchScreen"
                    component={SearchScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <SearchStackScreens.Screen name="UserDetailScreen" component={UserDetailScreen} options={{animation:'slide_from_bottom'}} />
                <SearchStackScreens.Screen name='UserFollowersScreen' component={UserFollowersScreen} options={{animation:'slide_from_right'}} />
            </SearchStackScreens.Navigator>
        </>
    )

}

export default SearchStack