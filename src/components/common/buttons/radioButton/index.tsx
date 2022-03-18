import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, TouchableOpacity } from 'react-native';
import colors from 'utils/colors';
import { sizes } from 'utils/sizes';

interface IProps {
  isSelected?: boolean,
  onPress: () => void
}

const RadioButton = ({isSelected, onPress}: IProps) => {
  const radioAnimated = useRef(new Animated.Value(0)).current;

  const circleColorAnimated = radioAnimated.interpolate({
    inputRange: [0, 17],
    outputRange: [colors.gray40, colors.primary]
  });

  const lineColorAnimated = radioAnimated.interpolate({
    inputRange: [0, 17],
    outputRange: [colors.additionalColor4, colors.additionalColor13]
  });

  useEffect(() => {
    if (isSelected) {
      Animated.timing(radioAnimated, {
        toValue: 17,
        duration: 200,
        useNativeDriver: false
      }).start();
    } else {
      Animated.timing(radioAnimated, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false
      }).start();
    }
  }, [isSelected]);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Animated.View style={[styles.radioButton, {backgroundColor: lineColorAnimated}]}>
        <Animated.View style={[styles.icon, {left: radioAnimated, borderColor: circleColorAnimated}]}/>
      </Animated.View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    width: sizes.size_40,
    height: sizes.size_40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButton: {
    width: '100%',
    height: sizes.size_5,
    borderRadius: sizes.size_3,
  },
  icon: {
    position: 'absolute',
    top: -sizes.size_10,
    width: sizes.size_25,
    height: sizes.size_25,
    borderRadius: sizes.size_15,
    borderWidth: sizes.size_5,
    backgroundColor: colors.white
  }
});

export default RadioButton