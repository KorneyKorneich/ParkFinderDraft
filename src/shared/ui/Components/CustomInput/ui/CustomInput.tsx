import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { styles } from "./CustomInput.styles.ts";

interface CustomInputProps extends TextInputProps {
    title?: string;
    value: string;
    setValue: (value: string) => void;
	isPassword?: boolean
}

export const CustomInput = (props: CustomInputProps) => {
	const { title, value, setValue, isPassword, ...rest } = props;

	const handleTextChange = (text: string) => {
		setValue(text);
	};

	return (
		<View style={styles.wrapper}>
			<View style={styles.container}>
				<Text style={styles.title}>{title}</Text>
				<TextInput
					autoCapitalize={"none"}
					secureTextEntry={isPassword}
					style={styles.input}
					value={value}
					onChangeText={handleTextChange}
					{...rest}
				/>
			</View>
		</View>
	);
};
