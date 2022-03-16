import MainText from 'components/common/text';
import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import colors from 'utils/colors';
import { sizes, fontWeights } from 'utils/sizes';

interface ButtonProps {
	title: string,
	primary?: boolean,
	outlined?: boolean,
	disabled?: boolean,
	buttonStyles?: StyleProp<ViewStyle>,
	containerStyle?: StyleProp<ViewStyle>,
	onPress: () => void,
}

const MainButton = (props: ButtonProps) => {
  const { 
    title, 
    primary, 
    outlined = false, 
    disabled = false, 
    buttonStyles, 
    containerStyle ,
    onPress,
  } = props;

	const mainButton = !outlined ?
		<TouchableOpacity disabled={disabled} onPress={onPress} style={[
			styles.button,
			primary ? styles.buttonPrimary : styles.buttonSecondary,
			buttonStyles,
			disabled && primary && { backgroundColor: colors.primary }
		]}>
			<MainText style={styles.titlePrimary}>
				{title}
			</MainText>
		</TouchableOpacity>
		:
		<TouchableOpacity disabled={disabled} onPress={onPress} style={[styles.button, styles.buttonOutlined, buttonStyles]}>
			<MainText style={styles.titleSecondary}>
				{title}
			</MainText>
		</TouchableOpacity>;

	return (
		<View style={containerStyle}>{mainButton}</View>
	);
};

const styles = StyleSheet.create({
	button: {
		borderRadius: sizes.radius,
		paddingVertical: sizes.size_15,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonPrimary: {
		backgroundColor: colors.primary,
	},
	buttonSecondary: {
		backgroundColor: colors.gray,
	},
	buttonOutlined: {
		borderWidth: 1,
		borderColor: colors.primary3
	},
	titlePrimary: {
		color: colors.white,
		fontSize: sizes.size_15,
		fontFamily: fontWeights.fontWeight_600
	},
	titleSecondary: {
		color: colors.black,
		fontSize: sizes.size_15,
		fontFamily: fontWeights.fontWeight_600
	}
});

export default MainButton;