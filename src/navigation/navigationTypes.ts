import { NavigatorScreenParams } from "@react-navigation/native";

import IUser from "../models/UserModel";
import IUserFollowers from "../models/UserFollowersModel";

export type RootStackParamList = {
    HomeStack: NavigatorScreenParams<HomeTabParamList>;
    SearchStack: NavigatorScreenParams<SearchTabParamList>;
    FavoriteStack: NavigatorScreenParams<FavoriteTabParamList>;
    SettingsScreen: undefined
};

export type HomeTabParamList = {
    HomeScreen: undefined
    UserDetailScreen: { userName: string }
    UserFollowersScreen: { userFollowers: IUserFollowers[] }
};

export type SearchTabParamList = {
    SearchScreen: undefined
    UserDetailScreen: { userName: string }
    UserFollowersScreen: { userFollowers: IUserFollowers[] }
};

export type FavoriteTabParamList = {
    FavoriteScreen: undefined
    UserDetailScreen: { userName: string }
    UserFollowersScreen: { userFollowers: IUserFollowers[] }
};