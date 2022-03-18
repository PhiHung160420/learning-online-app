import {IconButton} from 'components/common';
import React from 'react'
import { ImageSourcePropType, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import { useAppSelector } from 'store';
import colors from 'utils/colors';
import { fonts } from 'utils/fonts';
import { sizes } from 'utils/sizes';

interface IProps {
  title?: string,
  subTitle?: string,
  icon?: ImageSourcePropType,
  style?: StyleProp<ViewStyle>,
  onPress?: () => void,
}

const Header = (props: IProps) => {
  const {
    title,
    subTitle,
    icon,
    style,
    onPress
  } = props;

  const appTheme = useAppSelector(state => state?.theme?.appTheme);

  return (
    <View style={[styles().container, style]}>
      <View style={styles().content}>
        {title && title.length > 0 && <Text style={styles(appTheme).title}>{title}</Text>}
        {subTitle && subTitle.length > 0 && <Text style={styles(appTheme).subTitle}>{subTitle}</Text>}
      </View>

      {icon && <IconButton icon={icon} onPress={onPress !== undefined ? onPress : () => {}} iconStyle={styles(appTheme).icon}/>}
    </View>
  )
};

const styles = (appTheme?: any) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: sizes.size_16,
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
  }
});

export default Header