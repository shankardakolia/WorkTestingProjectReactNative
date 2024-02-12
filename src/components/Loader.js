import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  Dimensions,
} from 'react-native';
import {
  moderateVerticalScale,
  scale,
  verticalScale,
} from '../libraries/scaling';
import {OverlayColor, ProgressColor} from '../constants/constants';
import LottieView from 'lottie-react-native';

const Loader = ({isVisible = false, overlayColor = OverlayColor.Level1}) => {
  if (!isVisible) {
    return null;
  }

  const styles = StyleSheet.create({
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: `rgba(0, 0, 0, ${overlayColor})`,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    loadingBox: {
      width: '90%',
      height: verticalScale(20),
      marginTop: Dimensions.get('window').height / 1.2,
      // borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.overlay}>
      <View style={styles.loadingBox}>
        <LottieView
          style={{width: '90%', height: 200, alignItems: 'center'}}
          source={require('../assets/Loader4.json')}
          autoPlay
          loop
        />
      </View>
    </View>
  );
};

export default Loader;
