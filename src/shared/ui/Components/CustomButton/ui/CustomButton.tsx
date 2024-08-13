import React from "react";
import {
	GestureResponderEvent,
	ImageSourcePropType,
	StyleProp,
	Text,
	TextStyle,
	TouchableOpacity,
	TouchableOpacityProps,
	ViewStyle,
} from "react-native";
import { styles } from "./CustomButton.styles";
import { CustomImage } from "@shared/ui";
import { Nullable } from "@shared/api";

interface ICustomButton extends TouchableOpacityProps {
	title: Nullable<string>;
	style?: StyleProp<ViewStyle>;
	onPress?: (event: GestureResponderEvent) => void;
	textStyle?: StyleProp<TextStyle>;
	imgPath?: ImageSourcePropType;
	color: Nullable<string>;
}

export const CustomButton: React.FC<ICustomButton> = ({
	title,
	style,
	imgPath,
	textStyle,
	onPress,
	color,
	...props
}) => {
	const buttonStyles = [
		styles.btnArea,
		styles.customButtonContainer,
		color ? { backgroundColor: color } : null,
		style,
	].filter(Boolean);

	return (
		<TouchableOpacity onPress={onPress} {...props} activeOpacity={0.8} style={buttonStyles}>
			{title ? <Text style={[styles.title, textStyle]}>{title}</Text> : imgPath && <CustomImage path={imgPath} />}
		</TouchableOpacity>
	);
};
