import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from 'utils/colors';
import icons from 'utils/icons';
import I18n from 'utils/language/i18n';
import { fontWeights, sizes } from 'utils/sizes';

interface IProps {
  isSelected?: boolean,
  role: string,
  onPress: () => void
}

const RoleButton = (props: IProps) => {
  const {
    isSelected,
    role,
    onPress
  } = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, {backgroundColor: isSelected ? colors.primary3 : colors.additionalColor13}]}>
      <View style={{flex: 1}}>
        <Image 
          source={isSelected ? icons.checkbox_on_dark : icons.checkbox_off}
          resizeMode="contain"
          style={styles.checkbox}
        />
      </View>

      <View style={styles.content}>
        <Text style={[styles.text_1, {color: isSelected ? colors.white : colors.black}]}>{I18n.t('REGISTER_I_AM_A')}</Text>
        <Text style={[styles.text_2, {color: isSelected ? colors.white : colors.black}]}>{role}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    width: sizes.size_150,
    height: sizes.size_120,
    borderRadius: sizes.radius
  },
  checkbox: {
    width: sizes.size_30,
    height: sizes.size_30,
    borderRadius: sizes.size_15,
    position: 'absolute',
    right: sizes.size_5,
    top: sizes.size_5,
  },
  text_1: {
    fontSize: sizes.size_15,
  },
  text_2: {
    fontSize: sizes.size_20,
    fontWeight: fontWeights.fontWeight_700
  },
  content: {
    marginLeft: sizes.base,
    marginBottom: sizes.base
  }
});

export default RoleButton