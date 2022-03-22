import MultiSlider from '@ptomasroos/react-native-multi-slider';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from 'utils/colors';
import { fonts } from 'utils/fonts';
import { deviceWidth, sizes } from 'utils/sizes';

interface IProps {
  values?: any,
  min?: number,
  max?: number,
  prefix?: string,
  postfix?: string,
  onValuesChange: (values: any) => void
}

const TwoPointSlider = (props: IProps) => {
  const {
    values,
    min,
    max,
    prefix,
    postfix,
    onValuesChange
  } = props;
  
  return (
    <MultiSlider 
      values={values}
      sliderLength={deviceWidth - (sizes.padding * 2) - 30}
      min={min}
      max={max}
      step={1}
      markerOffsetY={sizes.size_15}
      selectedStyle={styles.selectedStyle}
      trackStyle={styles.trackStyle}
      customMarker={(e) => {
        return (
          <View style={styles.markerContainer}>
            <View style={styles.marker}/>
            <Text style={styles.markerValue}>{prefix}{e.currentValue} {postfix}</Text>
          </View>
        )
      }}
      onValuesChange={(values) => onValuesChange(values)}
    />
  )
};

const styles = StyleSheet.create({
  markerContainer: {
    height: sizes.size_60,
    width: sizes.size_60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    height: sizes.size_15,
    width: sizes.size_15,
    borderRadius: sizes.size_10,
    borderWidth: sizes.size_2,
    borderColor: colors.primary,
    backgroundColor: colors.white
  },
  selectedStyle: {
    height: sizes.size_2,
    backgroundColor: colors.primary
  },
  trackStyle: {
    height: 1,
    borderRadius: sizes.size_10,
    backgroundColor: colors.gray30
  },
  markerValue: {
    color: colors.gray80,
    marginTop: sizes.size_5,
    ...fonts.body3
  }
});

export default TwoPointSlider