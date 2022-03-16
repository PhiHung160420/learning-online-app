import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import colors from 'utils/colors'
import { sizes } from 'utils/sizes'

interface Iprops {
  lineStyle?: StyleProp<ViewStyle>
}

const LineDivider = ({lineStyle}: Iprops) => {
  return (
    <View 
      style={[{
        height: sizes.size_1,
        width: '100%',
        backgroundColor: colors.gray20,
      }, lineStyle]}
    />
  )
}

export default LineDivider