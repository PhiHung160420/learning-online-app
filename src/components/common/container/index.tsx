import React from 'react';
import { ImageSourcePropType, SafeAreaView, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import colors from 'utils/colors';
import { sizes } from 'utils/sizes';
import {Header} from 'components/common';
import { useAppSelector } from 'store';

interface IContainer {
  isHeader?: boolean,
  children?: any,
  containerStyle?: StyleProp<ViewStyle>,
  headerTitle?: string,
  headerSubTitle?: string,
  headerIcon?: ImageSourcePropType,
  headerStyle?: StyleProp<ViewStyle>,
  onPressHeaderIcon?: () => void,
}

const Container = (props: IContainer) => {
  const { 
    isHeader, 
    children, 
    containerStyle,
    headerTitle,
    headerSubTitle,
    headerIcon,
    headerStyle,
    onPressHeaderIcon
  } = props;

  const appTheme = useAppSelector(state => state?.theme?.appTheme);

  return (
    <SafeAreaView style={styles(appTheme).container}>
			{isHeader && 
        <Header 
          title={headerTitle} 
          subTitle={headerSubTitle} 
          icon={headerIcon}
          style={headerStyle}
          onPress={onPressHeaderIcon}
        />
      }
			<View style={[styles().content, containerStyle]}>
				{children}
			</View>
		</SafeAreaView>
  )
};

const styles = (appTheme?: any) => StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: appTheme?.backgroundColor1
  },
  content: { 
    flex: 1, 
    paddingHorizontal: sizes.padding, 
    paddingBottom: sizes.size_15, 
  }
});

export default Container;