import { IconButton } from 'components/common';
import React, { useState } from 'react';
import { KeyboardType, StyleProp, StyleSheet, Text, TextInput, TextStyle, View, ViewStyle } from 'react-native';
import colors from 'utils/colors';
import { fonts } from 'utils/fonts';
import icons from 'utils/icons';
import { sizes } from 'utils/sizes';

interface IProps {
  label?: string,
  value: any,
  isPassword?: boolean,
  containerStyle?: StyleProp<ViewStyle>,
  labelStyle?: StyleProp<TextStyle>,
  inputStyle?: StyleProp<ViewStyle>,
  keyboardType?: KeyboardType,
  onChangeValue: (value: string) => void,
}

const InputField = (props: IProps) => {
  const {
    label,
    value,
    isPassword,
    containerStyle,
    labelStyle,
    inputStyle,
    keyboardType,
    onChangeValue
  } = props;

  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <View style={containerStyle}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>

      <TextInput
        value={value} 
        style={[styles.input, inputStyle]}
        onChangeText={onChangeValue}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType || 'default'}
      />

      {isPassword && (
        <IconButton 
          icon={secureTextEntry ? icons.eye : icons.eye_close}
          iconStyle={styles.eyeIcon}
          onPress={() => setSecureTextEntry(!secureTextEntry)}
        />
      )}
    </View>
  )
};

const styles = StyleSheet.create({
  label: {
    ...fonts.h3,
    fontSize: sizes.size_16,
    color: colors.gray30
  },
  input: {
    height: sizes.size_50,
    borderBottomWidth: sizes.size_1,
    borderBottomColor: colors.gray20,
    ...fonts.h3,
    color: colors.gray50,
  },
  eyeIcon: {
    tintColor: colors.gray40,
    width: sizes.size_20,
    height: sizes.size_20,
    position: 'absolute',
    right: 0,
    bottom: sizes.size_10
  }
});

export default InputField