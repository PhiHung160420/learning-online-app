import {IconButton} from 'components/common';
import { goback } from 'navigation/service';
import React from 'react'
import { Image, ImageSourcePropType, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { useAppSelector } from 'store';
import colors from 'utils/colors';
import { fonts } from 'utils/fonts';
import icons from 'utils/icons';
import { sizes } from 'utils/sizes';

interface IProps {
  title?: string,
  subTitle?: string,
  icon?: ImageSourcePropType,
  style?: StyleProp<ViewStyle>,
  headerTitleStyle?: StyleProp<ViewStyle>,
  isBackButton?: boolean,
  backButtonStyle?: StyleProp<ViewStyle>,
  onPress?: () => void,
}

const Header = (props: IProps) => {
  const {
    title,
    subTitle,
    icon,
    style,
    headerTitleStyle,
    isBackButton = false,
    backButtonStyle,
    onPress
  } = props;

  const appTheme = useAppSelector(state => state?.theme?.appTheme);

  return (
    <View style={[styles().container, style]}>
      {isBackButton && (
        <TouchableOpacity style={backButtonStyle} onPress={() => goback()}>
          <Image source={icons.back} style={styles().backIcon} resizeMode="contain"/>
        </TouchableOpacity>
      )}
      <View style={styles().content}>
        {title && title.length > 0 && <Text style={[styles(appTheme).title, headerTitleStyle]}>{title}</Text>}
        {subTitle && subTitle.length > 0 && <Text style={styles(appTheme).subTitle}>{subTitle}</Text>}
      </View>

      {icon && <IconButton icon={icon} onPress={onPress !== undefined ? onPress : () => {}} iconStyle={styles(appTheme).icon}/>}
    </View>
  )
};

const styles = (appTheme?: any) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: sizes.padding,
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  title: {
    ...fonts.h2,
    color: appTheme?.textColor,
  },
  subTitle: {
    color: colors.gray50,
    ...fonts.body3
  },
  icon: {
    tintColor: appTheme?.tintColor,
  },
  backIcon: {
    width: sizes.size_30,
    height: sizes.size_30,
  },
});

export default Header