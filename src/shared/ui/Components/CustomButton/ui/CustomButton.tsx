import { styles } from "./CustomButton.styles.ts";
import { ButtonProps, Text, TouchableOpacity, View } from "react-native";
import { StyleGuide } from "@shared/ui";

interface CustomButtonProps extends  ButtonProps{
    title: string;
	onPress: () => void

}

export const CustomButton = (props: CustomButtonProps) => {
	const {title, onPress, ...rest} = props;
	return (
		<View style={styles.customButtonContainer}>
			<TouchableOpacity onPress={onPress}  color={StyleGuide.WHITE} {...rest}>
				<Text style={styles.buttonTitle}>{title}</Text>
			</TouchableOpacity>
		</View>
	);
};

