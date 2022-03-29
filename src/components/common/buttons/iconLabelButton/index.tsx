import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {fonts} from 'utils/fonts';
import {sizes} from 'utils/sizes';

interface IProps {
  icon: ImageSourcePropType;
  iconStyle?: StyleProp<ImageStyle>;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const IconLabelButton = (props: IProps) => {
  const {icon, iconStyle, label, labelStyle, containerStyle, onPress} = props;

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Image
        source={icon}
        resizeMode="contain"
        style={[styles.icon, iconStyle]}
      />
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: sizes.size_20,
    height: sizes.size_20,
  },
  label: {
    marginLeft: sizes.base,
    ...fonts.h4,
  },
});

export default IconLabelButton;
