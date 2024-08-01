import { styles } from "./CustomButton.styles.ts";
import { ButtonProps, Text, TouchableOpacity, View } from "react-native";
import { StyleGuide } from "@shared/ui";

interface CustomButtonProps extends  ButtonProps{
    title: string;
	onPress: () => void
	color: StyleGuide
	id?: string
}

export const CustomButton = (props: CustomButtonProps) => {
	const {title, onPress, color, id, ...rest} = props;
	return (
		<View style={[styles.customButtonContainer, {backgroundColor: color}]}>
			<TouchableOpacity id={id} onPress={onPress} {...rest}>
				<Text style={styles.buttonTitle}>{title}</Text>
			</TouchableOpacity>
		</View>
	);
};

