import React from "react";
import { StyleProp, Text, TextInput, TextInputProps, View, ViewStyle } from "react-native";
import { styles } from "./CustomInput.styles.ts";

interface CustomInputProps extends TextInputProps {
	title?: string;
	isPassword?: boolean;
	boxStyle?: StyleProp<ViewStyle>;
	value: string;
	incorrectValue?: boolean;
}

export const CustomInput: React.FC<CustomInputProps> = ({
	title,
	isPassword,
	style,
	boxStyle,
	value,
	incorrectValue,
	...rest
}) => {
	return (
		<View style={[styles.inputBox, boxStyle]}>
			<View style={styles.container}>
				{title && <Text style={[styles.title, incorrectValue ? styles.error : null]}>{title}</Text>}
				<TextInput
					autoCapitalize={"none"}
					secureTextEntry={isPassword}
					style={[styles.input, style, incorrectValue ? styles.error : null]}
					value={value}
					{...rest}
				/>
			</View>
		</View>
	);
};
