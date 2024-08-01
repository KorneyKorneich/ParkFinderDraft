import React from "react";
import { StyleProp, Text, TextInput, TextInputProps, View, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
import { StyleGuide } from "@shared/ui";

interface CustomInputProps extends TextInputProps {
    title?: string;
	isPassword?: boolean;
    boxStyle?: StyleProp<ViewStyle>,
}

export const CustomInput: React.FC<CustomInputProps> = ({ title, isPassword, style, boxStyle, ...rest }) => {

	return (
		<View style={[styles.inputBox, boxStyle]}>
			<View style={styles.container}>
				{title && <Text style={styles.title}>{title}</Text>}
				<TextInput
					autoCapitalize={"none"}
					secureTextEntry={isPassword}
					style={[styles.input, style]}
					{...rest}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
    inputBox: {
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
	// wrapper:{
	// 	marginVertical: 10
	// },
	container:{
		flexDirection: "column",
		gap: 5

	},
	title:{
		fontSize: 12,
	},
	input:{
		width: "100%",
		backgroundColor: StyleGuide.WHITE,
		padding: 10,
		borderRadius: 8,
		borderColor: StyleGuide.GREY,
		borderWidth: 1
	}
});