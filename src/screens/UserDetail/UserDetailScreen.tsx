import { View, Text, ActivityIndicator, SafeAreaView, Image, Pressable, TouchableOpacity, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { HomeTabParamList, RootStackParamList } from '../../navigation/navigationTypes'
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, { BounceInLeft, BounceInRight, FadeInUp, FlipInEasyX, LightSpeedInLeft, LightSpeedInRight, LightSpeedOutLeft, RotateInUpRight, SlideInRight, SlideInUp, ZoomInEasyDown, ZoomInRight, ZoomInRotate } from 'react-native-reanimated';
import Spinner from 'react-native-spinkit';
import { userDetailGetData } from '../../hooks/userDetail/userDetailGetDataHook' //user data retrieved from the hook

import styles from './UserDetailStyles'
import { useNavigation } from '@react-navigation/native';
import UserImageModal from '../../components/UserImageModal/UserImageModalCompanent';
import { userDetailGetStarredCount } from '../../hooks/userDetail/userDetailGetStarredCountHook';
import { openInAppBrowser } from '../../utils/openInAppBrowser';
import { userDetailLayout } from '../../layouts/UserDetailLayout';
import { windowWidth } from '../../utils/constants';


type Props = NativeStackScreenProps<HomeTabParamList, 'UserDetailScreen'>

const UserDetailScreen: React.FC<Props> = ({ route }) => {

  //Params
  const userName = route.params.userName

  //User detail fetch service
  const { data, isLoading, error } = userDetailGetData(userName);

  //User starredCount fetch service
  const { starred, starredIsLoading, starredError } = userDetailGetStarredCount(userName);

  //Navigation
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const turnBack = () => {
    navigation.goBack()
  }

  //Modal useState
  const [isImageModalVisible, setIsImageModalVisible] = useState(false);

  if (isLoading || starredIsLoading) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#0D1117'}}>
        <Spinner isVisible={true} size={windowWidth/10} type='WordPress' color='white' />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* <SkeletonContent
        containerStyle={styles.mainContainer}
        isLoading={isLoading || starredIsLoading}
        // isLoading={true}
        animationDirection='horizontalRight'
        layout={userDetailLayout}
        duration={2000}
      > */}

      <View style={styles.headerContainer}>
        <View style={styles.headerButtonsContent}>
          <Pressable onPress={() => turnBack()}>
            <MaterialCommunityIcons name='chevron-left' size={24} color={'white'} style={styles.headerButtonBackground} />
          </Pressable>
          <MaterialCommunityIcons name='heart' size={24} color={'white'} style={styles.headerButtonBackground} />
        </View>

        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => setIsImageModalVisible(true)}>
            <Animated.Image
              entering={BounceInLeft.duration(600)}
              source={data?.avatar_url ? { uri: data.avatar_url } : require('../../assets/images/no_image_available.jpg')}
              style={styles.headerImage}
            />
          </TouchableOpacity>
          <Animated.View entering={BounceInRight.duration(600)} style={styles.headerTextContent}>
            <Text style={styles.headerTextName}>{data?.name || 'Anonymous'}</Text>
            <Text style={styles.headerTextLogin}>@{data?.login}</Text>
            <MaterialCommunityIcons name='map-marker' color={'white'} size={13} >
              <Text > {data?.location || 'Location not available'}</Text></MaterialCommunityIcons>
          </Animated.View>
        </View>

        <View style={styles.headerBioContent}>
          <Animated.Text style={styles.headerBioText} entering={FlipInEasyX.duration(600)}>
            {data?.bio && data.bio.length > 90
              ? `"${data.bio.slice(0, 90)}..."`
              : data?.bio || 'Bio not available'}</Animated.Text>
        </View>

        <Animated.View style={styles.headerSummaryContainer} entering={FlipInEasyX.duration(600)}>
          <View style={styles.headerSummaryContent}>
            <Text style={styles.headerSummaryNumber}>{data?.public_repos}</Text>
            <Text style={styles.headerSummaryText}>Public Repos</Text>
          </View>

          <View style={styles.headerSummaryBorder} />

          <View style={styles.headerSummaryContent}>
            <Text style={styles.headerSummaryNumber}>{starred || 0}</Text>
            <Text style={styles.headerSummaryText}>Starred</Text>
          </View>

          <View style={styles.headerSummaryBorder} />

          <View style={styles.headerSummaryContent}>
            <Text style={styles.headerSummaryNumber}>{data?.public_gists}</Text>
            <Text style={styles.headerSummaryText}>Public Gists</Text>
          </View>
        </Animated.View>

        <Animated.View style={styles.headerButton} entering={SlideInUp.duration(750)}>
          <Button title='VIEW PROFILE' color={'#238636'} onPress={() => openInAppBrowser(data?.html_url)} />
        </Animated.View>

      </View>


      <View style={styles.bodyContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <Animated.Text entering={LightSpeedInLeft.duration(1000)}>Followers ({data?.followers})</Animated.Text>
          <Animated.Text entering={LightSpeedInRight.duration(1000)}>View All</Animated.Text>
        </View>
        <View style={{ width: 75, height: 75, borderRadius: 75, backgroundColor: 'red', marginTop: 10 }} />
        <Text style={{ marginTop: 5 }}>Deneme</Text>
        {/* <Text style={{ flex: 1, backgroundColor: 'red', textAlign: 'center',marginBottom:20, position: 'absolute', bottom: 0, width:'100%',marginHorizontal:20 }}>{data?.created_at}</Text> */}
      </View>

      <UserImageModal visible={isImageModalVisible} imageUrl={data?.avatar_url} onClose={() => setIsImageModalVisible(false)} />

      {/* </SkeletonContent> */}
    </SafeAreaView >
  )
}

export default UserDetailScreen