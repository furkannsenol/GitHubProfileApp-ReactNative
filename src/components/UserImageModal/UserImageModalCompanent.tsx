import React from 'react';
import { View, Modal, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import styles from './UserImageModalStyles';
import Animated, { ZoomInEasyDown, ZoomInEasyUp, ZoomInLeft, ZoomInRotate, ZoomOutEasyDown, ZoomOutRotate } from 'react-native-reanimated';

interface IProps {
  visible: boolean;
  imageUrl: string | undefined;
  onClose: () => void;
}

const UserImageModal: React.FC<IProps> = ({ visible, imageUrl, onClose }) => {
  return (
    <Modal visible={visible} transparent={true}>
      <TouchableWithoutFeedback onPress={onClose}>
        <BlurView style={styles.blurContainer} blurType="dark" blurAmount={100} >
          <View style={styles.imageContent}>
            <Animated.Image
              entering={ZoomInRotate.duration(600)}
              exiting={ZoomOutRotate.duration(600)}
              source={{ uri: imageUrl }}
              style={styles.image}
            />
          </View>
        </BlurView>
      </TouchableWithoutFeedback>
    </Modal >
  );
};

export default UserImageModal;
