import { TextButton } from 'components/common';
import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { fonts } from 'utils/fonts';
import { sizes } from 'utils/sizes';

interface IProps {
  containerStyle?: StyleProp<ViewStyle>,
  headerStyle?: StyleProp<ViewStyle>,
  title?: string,
  button?: string,
  children?: any,
  onPress?: () => void
}

const Section = (props: IProps) => {
  const {
    containerStyle,
    headerStyle,
    title,
    button,
    children,
    onPress
  } = props;
  return (
    <View style={containerStyle}>
      <View style={[styles.header, headerStyle]}>
        {title && title.length > 0 && <Text style={styles.text}>{title}</Text>}
        
        {button && button.length > 0 && 
          <TextButton 
            label={button}
            onPress={onPress ? onPress : () => {}}
          />}
      </View>
      {children}
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: sizes.padding
  },
  text: {
    flex: 1,
    ...fonts.h2
  }
});

export default Section