/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {View, StyleSheet, Animated, Button, Easing} from 'react-native';

export const Animation101Screen = () => {
  const opacity = useRef(new Animated.Value(0.4)).current;
  const top = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(top, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0.4,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity,
          transform: [
            {
              translateY: top,
            },
          ],
          marginBottom: 20,
        }}
      />
      <Button title="FadeIn" onPress={fadeIn} />
      <Button title="FadeOut" onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  purpleBox: {
    backgroundColor: '#5856d6',
    width: 150,
    height: 150,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
