import React from 'react';
import { ImageSourcePropType, SafeAreaView, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import colors from 'utils/colors';
import { sizes } from 'utils/sizes';
import HomeHeader from '../header/homeHeader';

interface IContainer {
  isHomeHeader?: boolean,
  children?: any,
  containerStyle?: StyleProp<ViewStyle>,
  homeHeaderTitle?: string,
  homeHeaderSubTitle?: string,
  homeHeaderIcon?: ImageSourcePropType,
  homeHeaderStyle?: StyleProp<ViewStyle>,
}

const Container = (props: IContainer) => {
  const { 
    isHomeHeader, 
    children, 
    containerStyle,
    homeHeaderTitle,
    homeHeaderSubTitle,
    homeHeaderIcon,
    homeHeaderStyle
  } = props;

  return (
    <SafeAreaView style={styles.container}>
			{isHomeHeader && 
        <HomeHeader 
          title={homeHeaderTitle} 
          subTitle={homeHeaderSubTitle} 
          icon={homeHeaderIcon}
          style={homeHeaderStyle}
        />
      }
			<View style={[styles.content, containerStyle]}>
				{children}
			</View>
		</SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: colors.white 
  },
  content: { 
    flex: 1, 
    paddingHorizontal: sizes.padding, 
    paddingBottom: sizes.size_15 
  }
});

export default Container