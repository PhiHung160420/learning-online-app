import React from 'react'
import { Image, ImageSourcePropType, ImageStyle, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import colors from 'utils/colors';
import { fonts } from 'utils/fonts';
import { sizes } from 'utils/sizes';

interface IconTextProps {
  containerStyle?: StyleProp<ViewStyle>,
  icon?: ImageSourcePropType,
  iconStyle?: StyleProp<ImageStyle>,
  label?: string,
  labelStyle?: StyleProp<TextStyle>
}

const IconText = (props: IconTextProps) => {
  const {
    containerStyle,
    icon,
    iconStyle,
    label,
    labelStyle
  } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      {icon && <Image source={icon} style={[styles.icon, iconStyle]}/>}

      {label && label.length > 0 && <Text style={[styles.label, labelStyle]}>{label}</Text>}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: sizes.size_20,
    height: sizes.size_20,
    tintColor: colors.gray30
  },
  label: {
    marginLeft: sizes.base,
    color: colors.gray30,
    ...fonts.body3,
  }
});

export default IconText