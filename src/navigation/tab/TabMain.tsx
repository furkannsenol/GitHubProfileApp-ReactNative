import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { RootStackParamList } from '../navigationTypes';
import HomeStack from '../stacks/HomeStack';
import SearchStack from '../stacks/SearchStack';
import FavoriteStack from '../stacks/FavoriteStack';
import SettingsScreen from '../../screens/Settings/SettingsScreen';



const Tab = createBottomTabNavigator<RootStackParamList>();

const TabMain = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='HomeStack'
                safeAreaInsets={{ //Fixed Bottom-Tab jump bug
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                }}
                screenOptions={{
                    headerShown: false,
                    tabBarHideOnKeyboard: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#238636',
                    tabBarInactiveTintColor: '#0D1117',
                    tabBarLabelStyle: {
                        fontSize: 11,
                        //paddingBottom:10
                    }, tabBarStyle: {
                        height: 50,
                    },
                    // guzel tasarım kalsın baska projede kullanırım.
                    // tabBarStyle: {
                    //     position: 'absolute',
                    //     margin: 20,
                    //     backgroundColor: 'white',
                    //     borderRadius: 10,
                    //     height: 60,
                    //     //paddingBottom:5,
                    //     shadowColor: '#238636',
                    //     shadowOpacity: 0.06,
                    //     shadowOffset: {
                    //         width: 10,
                    //         height: 10
                    //     }
                    // },
                    tabBarLabelPosition: 'below-icon'
                }}
            >
                <Tab.Screen
                    name="HomeStack"
                    component={HomeStack}
                    options={{

                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" size={24} color={color} />
                        ),
                        tabBarLabel: 'Home'
                    }}
                />
                <Tab.Screen
                    name="SearchStack"
                    component={SearchStack}
                    options={{
                        tabBarLabel: 'Search',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account-search" size={24} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="FavoriteStack"
                    component={FavoriteStack}
                    options={{
                        tabBarLabel: 'Favorites',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="heart" size={24} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="SettingsScreen"
                    component={SettingsScreen}
                    options={{
                        tabBarLabel: 'Settings',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="cog" size={24} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabMain