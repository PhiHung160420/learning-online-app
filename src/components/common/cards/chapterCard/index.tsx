import React from 'react'
import { View, StyleSheet, ImageSourcePropType, Image, Text, TouchableWithoutFeedback } from 'react-native';
import { fonts } from 'utils/fonts';
import { sizes } from 'utils/sizes';
import {TextButton} from 'components/common';
import I18n from 'utils/language/i18n';
import { useAppSelector } from 'store';

interface IProps {
  image: ImageSourcePropType,
  name?: string,
  title?: string,
  onPress: () => void
}

const ChapterCard = (props: IProps) => {
  const {
    image,
    name,
    title,
    onPress
  } = props;
  const appTheme = useAppSelector(state => state?.theme?.appTheme);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image}/>

        <View style={styles.content}>
          <Text style={[styles.name, {color: appTheme?.textColor}]}>{name}</Text>
          <Text style={[styles.title, {color: appTheme?.textColor}]}>{title}</Text>
        </View>

        <TextButton 
          label={`${I18n.t('COURSE_CHAPTER_FOLLOW')} +`}
          buttonStyle={styles.button}
          labelStyle={styles.buttonLabel}
          onPress={() => {}}
        />
      </View>
    </TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: sizes.size_50,
    height: sizes.size_50,
    borderRadius: sizes.size_25
  },
  content: {
    flex: 1,
    marginLeft: sizes.base,
    justifyContent: 'center'
  },
  name: {
    ...fonts.h3,
    fontSize: sizes.size_18
  },
  title: {
    ...fonts.body3
  },
  button: {
    paddingHorizontal: sizes.radius,
    height: sizes.size_30
  },
  buttonLabel: {
    ...fonts.h3
  }
});

export default ChapterCard