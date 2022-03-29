import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import colors from 'utils/colors';
import {sizes} from 'utils/sizes';

interface IconButtonProps {
  icon: ImageSourcePropType;
  iconStyle?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  onPress: () => void;
}

const IconButton = (props: IconButtonProps) => {
  const {icon, iconStyle, containerStyle, disabled = false, onPress} = props;

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={onPress}
      disabled={disabled}>
      <Image
        source={icon}
        resizeMode="contain"
        style={[styles.icon, iconStyle]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: sizes.size_30,
    height: sizes.size_30,
    tintColor: colors.white,
  },
});

export default IconButton;
