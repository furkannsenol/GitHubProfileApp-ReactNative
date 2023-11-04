import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeTabParamList } from '../navigationTypes';
import HomeScreen from '../../screens/Home/HomeScreen';
import UserDetailScreen from '../../screens/UserDetail/UserDetailScreen';
import UserFollowersScreen from '../../screens/UserFollowers/UserFollowersScreen';

const HomeStackScreens = createNativeStackNavigator<HomeTabParamList>();

const HomeStack = () => {
    return (
        <>
            <HomeStackScreens.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <HomeStackScreens.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <HomeStackScreens.Screen name="UserDetailScreen" component={UserDetailScreen} options={{animation:'slide_from_right'}} />
                <HomeStackScreens.Screen name='UserFollowersScreen' component={UserFollowersScreen} options={{animation:'slide_from_right'}} />
            </HomeStackScreens.Navigator>
        </>
    )

}

export default HomeStack