import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import colors from 'utils/colors';
import {sizes, fontWeights} from 'utils/sizes';

interface ButtonProps {
  title: string;
  primary?: boolean;
  outlined?: boolean;
  disabled?: boolean;
  buttonStyles?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const PrimaryButton = (props: ButtonProps) => {
  const {
    title,
    primary,
    outlined = false,
    disabled = false,
    buttonStyles,
    containerStyle,
    onPress,
  } = props;

  const primaryButton = !outlined ? (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.button,
        primary ? styles.buttonPrimary : styles.buttonSecondary,
        buttonStyles,
        disabled && primary && {backgroundColor: colors.primary},
      ]}>
      <Text style={styles.titlePrimary}>{title}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, styles.buttonOutlined, buttonStyles]}>
      <Text style={styles.titleSecondary}>{title}</Text>
    </TouchableOpacity>
  );

  return <View style={containerStyle}>{primaryButton}</View>;
};

const styles = StyleSheet.create({
  button: {
    borderRadius: sizes.radius,
    paddingVertical: sizes.size_15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
  },
  buttonSecondary: {
    backgroundColor: colors.gray20,
  },
  buttonOutlined: {
    borderWidth: 1,
    borderColor: colors.primary3,
  },
  titlePrimary: {
    color: colors.white,
    fontSize: sizes.size_18,
    fontWeight: fontWeights.fontWeight_500,
  },
  titleSecondary: {
    color: colors.black,
    fontSize: sizes.size_18,
    fontWeight: fontWeights.fontWeight_500,
  },
});

export default PrimaryButton;
