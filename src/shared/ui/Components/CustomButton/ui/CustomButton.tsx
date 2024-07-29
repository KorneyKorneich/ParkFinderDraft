import { styles } from "./CustomButton.styles.ts";
import { ButtonProps, Text, TouchableOpacity, View } from "react-native";
import { StyleGuide } from "@shared/ui";

interface CustomButtonProps extends  ButtonProps{
    title: string;
	onPress: () => void
	color: StyleGuide
}

export const CustomButton = (props: CustomButtonProps) => {
	const {title, onPress, color, ...rest} = props;
	return (
		<View style={[styles.customButtonContainer, {backgroundColor: color}]}>
			<TouchableOpacity onPress={onPress} {...rest}>
				<Text style={styles.buttonTitle}>{title}</Text>
			</TouchableOpacity>
		</View>
	);
};

