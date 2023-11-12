import { StatusBar, Dimensions } from 'react-native';

const statusBarHeight: number = StatusBar.currentHeight || 0;

const windowWidth = Dimensions.get('window').width

export { statusBarHeight, windowWidth } 
