import React from 'react'
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import colors from 'utils/colors';
import { fonts } from 'utils/fonts';
import { sizes } from 'utils/sizes';

interface IProps {
  progressStyle?: StyleProp<ViewStyle>,
  progress: any,
  progressName?: string,
}

const ProgressBar = ({progressStyle, progress, progressName}: IProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, progressStyle]}>
        <View style={[styles.progress, {width: progress}]}/>
      </View>
      
      <View style={styles.content}>
        {progressName && progressName.length > 0 && <Text style={styles.progressName}>{progressName}</Text>}
        <Text style={styles.progressNumber}>{progress}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  progressBar: {
    width: '100%',
    height: sizes.size_10,
    borderRadius: sizes.size_10,
    backgroundColor: colors.white,
  },
  progress: {
    position: 'absolute',
    left: 0,
    height: '100%',
    borderRadius: sizes.size_10,
    backgroundColor: colors.primary
  },
  content: {
    flexDirection: 'row',
  },
  progressName: {
    flex: 1,
    color: colors.white,
    ...fonts.body4
  },
  progressNumber: {
    color: colors.white,
    ...fonts.body4
  }
});

export default ProgressBar