import { NavigatorScreenParams } from "@react-navigation/native";

import IUser from "../models/UserModel";
import IUserFollowers from "../models/UserFollowersModel";

export type RootStackParamList = {
    HomeStack: NavigatorScreenParams<HomeTabParamList>;
    SearchStack: NavigatorScreenParams<SearchParamList>;
    FavoriteStack: NavigatorScreenParams<FavoriteParamList>;
    SettingsScreen: undefined
};

export type HomeTabParamList = {
    HomeScreen: undefined
    UserDetailScreen: { user: IUser }
    UserFollowersScreen: { userFollowers: IUserFollowers[] }
};

export type SearchParamList = {
    SearchScreen: undefined
    UserDetailScreen: { user: IUser }
    UserFollowersScreen: { userFollowers: IUserFollowers[] }
};

export type FavoriteParamList = {
    FavoriteScreen: undefined
    UserDetailScreen: { user: IUser }
    UserFollowersScreen: { userFollowers: IUserFollowers[] }
};