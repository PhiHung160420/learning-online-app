import {IconButton} from 'components/common';
import React from 'react'
import { ImageSourcePropType, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import colors from 'utils/colors';
import { fonts } from 'utils/fonts';
import { sizes } from 'utils/sizes';

interface HomeHeaderProps {
  title?: string,
  subTitle?: string,
  icon?: ImageSourcePropType,
  style?: StyleProp<ViewStyle>
}

const HomeHeader = (props: HomeHeaderProps) => {
  const {
    title,
    subTitle,
    icon,
    style
  } = props;

  return (
    <View style={[styles.container, style]}>
      <View style={styles.content}>
        {title && title.length > 0 && <Text style={styles.title}>{title}</Text>}
        {subTitle && subTitle.length > 0 && <Text style={styles.subTitle}>{subTitle}</Text>}
      </View>

      {icon && <IconButton icon={icon} onPress={() => {}} iconStyle={styles.icon}/>}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: sizes.size_16,
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  title: {
    ...fonts.h2
  },
  subTitle: {
    color: colors.gray50,
    ...fonts.body3
  },
  icon: {
    tintColor: colors.black,
  }
});

export default HomeHeader