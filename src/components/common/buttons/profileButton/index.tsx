import React from 'react'
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from 'utils/colors';
import { fonts } from 'utils/fonts';
import icons from 'utils/icons';
import { sizes } from 'utils/sizes';
import {RadioButton} from 'components/common';
import { useAppSelector } from 'store';

interface IProps {
  icon?: ImageSourcePropType,
  label?: string,
  value?: string,
  isRadioButton?: boolean,
  sltRadioButton?: boolean,
  onPressRadioButton?: () => void,
  onPress: () => void,
}

const ProfileButton = (props: IProps) => {
  const {
    icon,
    label,
    value,
    isRadioButton = false,
    sltRadioButton = false,
    onPressRadioButton,
    onPress
  } = props;

  const appTheme = useAppSelector(state => state?.theme?.appTheme);
  
  return (
    <TouchableOpacity style={styles().container} onPress={onPress}>
      <View style={styles(appTheme).iconContainer}>
        {icon && <Image source={icon} resizeMode="contain" style={styles().icon}/>}
      </View>

      <View style={styles().content}>
        {label && label.length > 0 && <Text style={styles().label}>{label}</Text>}
        {value && value.length > 0 && <Text style={styles(appTheme).value}>{value}</Text>}
      </View>

      {isRadioButton ? (
        <RadioButton
          isSelected={sltRadioButton}
          onPress={onPressRadioButton !== undefined ? onPressRadioButton : () => {}}
        />
      ) : 
        <Image source={icons.right_arrow} style={styles(appTheme).arrowIcon} />}
    </TouchableOpacity>
  )
};

const styles = (appTheme?: any) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: sizes.size_80,
    alignItems: 'center'
  },
  iconContainer: {
    width: sizes.size_40,
    height: sizes.size_40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes.size_20,
    backgroundColor: appTheme?.backgroundColor3
  },
  icon: {
    width: sizes.size_25,
    height: sizes.size_25,
    tintColor: colors.primary
  },
  content: {
    flex: 1,
    marginLeft: sizes.radius
  },
  label: {
    color: colors.gray30,
    ...fonts.body3
  },
  value: {
    ...fonts.h3,
    color: appTheme?.textColor
  },
  arrowIcon: {
    width: sizes.size_20,
    height: sizes.size_20,
    tintColor: appTheme?.tintColor
  }
});

export default ProfileButton