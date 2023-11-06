import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FavoriteTabParamList } from '../navigationTypes';

import UserDetailScreen from '../../screens/UserDetail/UserDetailScreen';
import UserFollowersScreen from '../../screens/UserFollowers/UserFollowersScreen';
import FavoriteScreen from '../../screens/Favorite/FavoriteScreen';

const FavoriteStackScreens = createNativeStackNavigator<FavoriteTabParamList>();

const FavoriteStack = () => {
    return (
        <>
            <FavoriteStackScreens.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <FavoriteStackScreens.Screen
                    name="FavoriteScreen"
                    component={FavoriteScreen}
                    options={{
                        headerShown: false
                    }}
                />
                <FavoriteStackScreens.Screen name="UserDetailScreen" component={UserDetailScreen} options={{animation:'slide_from_right'}} />
                <FavoriteStackScreens.Screen name='UserFollowersScreen' component={UserFollowersScreen} options={{animation:'slide_from_right'}} />
            </FavoriteStackScreens.Navigator>
        </>
    )

}

export default FavoriteStack