import React from 'react';
import { ImageSourcePropType, SafeAreaView, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import colors from 'utils/colors';
import { sizes } from 'utils/sizes';
import {Header} from 'components/common';

interface IContainer {
  isHeader?: boolean,
  children?: any,
  containerStyle?: StyleProp<ViewStyle>,
  headerTitle?: string,
  headerSubTitle?: string,
  headerIcon?: ImageSourcePropType,
  headerStyle?: StyleProp<ViewStyle>,
}

const Container = (props: IContainer) => {
  const { 
    isHeader, 
    children, 
    containerStyle,
    headerTitle,
    headerSubTitle,
    headerIcon,
    headerStyle
  } = props;

  return (
    <SafeAreaView style={styles.container}>
			{isHeader && 
        <Header 
          title={headerTitle} 
          subTitle={headerSubTitle} 
          icon={headerIcon}
          style={headerStyle}
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