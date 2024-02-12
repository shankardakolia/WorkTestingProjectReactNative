import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BestSellerBadge = ({ text, backgroundColor, textColor }) => {
  const dynamicStyles = {
    backgroundColor: backgroundColor || '#FFD700',
    color: textColor || 'white',
  };

  return (
    <View style={[styles.badgeContainer, dynamicStyles]}>
      <Text style={[styles.badgeText, { color: dynamicStyles.color }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomRightRadius: 0,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ skewX: '-20deg' }, { translateX: -10 }], 
  },
  badgeText: {
    fontWeight: 'bold',
    transform: [{ skewX: '20deg' }],
  },
});

export default BestSellerBadge;
