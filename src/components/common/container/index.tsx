import { Header } from 'components/common';
import React, { Fragment } from 'react';
import { ImageSourcePropType, Keyboard, KeyboardAvoidingView, SafeAreaView, StyleProp, StyleSheet, TextStyle, TouchableWithoutFeedback, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppSelector } from 'store';
import { isIOS, sizes } from 'utils/sizes';

interface IContainer {
  isHeader?: boolean,
  children?: any,
  containerStyle?: StyleProp<ViewStyle>,
  headerTitle?: string,
  headerSubTitle?: string,
  headerIcon?: ImageSourcePropType,
  headerStyle?: StyleProp<ViewStyle>,
  headerTitleStyle?: StyleProp<TextStyle>,
  isKeyboardOverlay?: boolean,
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
    headerTitleStyle,
    isKeyboardOverlay = false,
    onPressHeaderIcon
  } = props;

  const appTheme = useAppSelector(state => state?.theme?.appTheme);
  const insets = useSafeAreaInsets();

  return (
    <Fragment>
			{isIOS
				? <KeyboardAvoidingView
            keyboardVerticalOffset={isKeyboardOverlay ? 20 + insets.bottom : 0}
            behavior={'padding'}
            style={{ flex: 1 }}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
              <SafeAreaView style={styles(appTheme).container}>
                {isHeader && 
                  <Header 
                    title={headerTitle} 
                    subTitle={headerSubTitle} 
                    icon={headerIcon}
                    style={headerStyle}
                    headerTitleStyle={headerTitleStyle}
                    onPress={onPressHeaderIcon}
                  />}
                <View style={[styles().content, containerStyle]}>
                  {children}
                </View>
              </SafeAreaView>
            </TouchableWithoutFeedback>
				  </KeyboardAvoidingView>
				: <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView style={styles(appTheme).container}>
              {isHeader && 
                <Header 
                  title={headerTitle} 
                  subTitle={headerSubTitle} 
                  icon={headerIcon}
                  style={headerStyle}
                  headerTitleStyle={headerTitleStyle}
                  onPress={onPressHeaderIcon}
                />}
              <View style={[styles().content, containerStyle]}>
                {children}
              </View>
            </SafeAreaView>
				  </TouchableWithoutFeedback>
			}
		</Fragment>
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


{/* <SafeAreaView style={styles(appTheme).container}>
  {isHeader && 
    <Header 
      title={headerTitle} 
      subTitle={headerSubTitle} 
      icon={headerIcon}
      style={headerStyle}
      headerTitleStyle={headerTitleStyle}
      onPress={onPressHeaderIcon}
    />
  }
  <View style={[styles().content, containerStyle]}>
    {children}
  </View>
</SafeAreaView> */}