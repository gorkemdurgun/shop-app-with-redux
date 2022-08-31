import {View, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';
import color from '../constants/color';

const Loading = () => {
  return (
    <View style={styles.view}>
      <ActivityIndicator size="large" color={color.primaryDark} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
  },
});

export default Loading;
