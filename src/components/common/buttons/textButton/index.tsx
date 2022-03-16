import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import colors from 'utils/colors';
import { fonts } from 'utils/fonts';
import { sizes } from 'utils/sizes';

interface TextButtonProps {
  buttonStyle?: StyleProp<ViewStyle>,
  disabled?: boolean,
  label?: string,
  labelStyle?: StyleProp<TextStyle>,
  onPress: () => void,
}

const TextButton = (props: TextButtonProps) => {
  const {
    buttonStyle,
    disabled,
    label,
    labelStyle,
    onPress
  } = props;
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} disabled={disabled} onPress={onPress}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    height: sizes.size_40,
    paddingHorizontal: sizes.padding,
    borderRadius: sizes.size_20,
  },
  label: {
    color: colors.white,
    ...fonts.h3,
  }
});

export default TextButton