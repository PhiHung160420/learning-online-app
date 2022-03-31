import React from 'react'
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import colors from 'utils/colors';
import { fonts } from 'utils/fonts';
import images from 'utils/images';
import { sizes } from 'utils/sizes';

export interface INotiData {
  id: number,
  avatar: ImageSourcePropType,
  name: string,
  created_at: string,
  message: string
}

interface IProps {
  data: INotiData,
}

const NotiCard = ({data}: IProps) => {
  const avatar = data?.avatar || images.thubnailDefault;
  const name = data?.name || '';
  const create_at = data?.created_at || '';
  const message = data?.message || '';

  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.avatar}/>

      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.createAt}>{create_at}</Text>
        </View>

        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: sizes.radius,
    alignItems: 'center'
  },
  avatar: {
    width: sizes.size_60,
    height: sizes.size_60,
    borderRadius: sizes.size_30
  },
  content: {
    flex: 1,
    marginLeft: sizes.padding
  },
  name: {
    ...fonts.h3
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  createAt: {
    fontSize: sizes.size_16,
    color: colors.gray30,
    marginLeft: sizes.radius
  },
  message: {
    fontSize: sizes.size_16,
    color: colors.black,
    marginTop: sizes.base
  }
});

export default NotiCard