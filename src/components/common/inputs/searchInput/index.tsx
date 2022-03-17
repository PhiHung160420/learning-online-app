import React from 'react'
import { View, StyleSheet, Image, TextInput, StyleProp, ViewStyle } from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import colors from 'utils/colors';
import { fonts } from 'utils/fonts';
import icons from 'utils/icons';
import I18n from 'utils/language/i18n';
import { deviceWidth, sizes } from 'utils/sizes';

interface IProps {
  value: string,
  onChangeText: (value: string) => void,
  containerStyle?: StyleProp<ViewStyle>
}

const SearchInput = (props: IProps) => {
  const {
    value,
    containerStyle,
    onChangeText
  } = props;

  return (
    <Shadow>
      <View style={[styles.container, containerStyle]}>
        <Image source={icons.search} style={styles.icon}/>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
          placeholder={I18n.t('SEARCH_SCREEN_INPUT_PLACEHOLDER')}
          placeholderTextColor={colors.gray}
        />
      </View>
    </Shadow>  
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: deviceWidth - (sizes.padding * 2),
    paddingHorizontal: sizes.radius,
    borderRadius: sizes.radius,
    backgroundColor: colors.white
  },
  icon: {
    width: sizes.size_25,
    height: sizes.size_25,
    tintColor: colors.gray40
  },
  input: {
    flex: 1,
    marginLeft: sizes.base,
    width: '100%',
    height: '100%',
    ...fonts.h4,
  }
});

export default SearchInput  