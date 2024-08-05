import { StyleSheet } from "react-native";
import { StyleGuide } from "@shared/ui";

export const styles = StyleSheet.create({
	checkbox: {
		backgroundColor: StyleGuide.BACKGROUND_LIGHT,
		width: 30,
		height: 30,
		borderRadius: 5,
		borderColor: StyleGuide.CHECKBOX_BORDER,
		borderWidth: 1
	}
});