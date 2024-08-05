import { StyleSheet } from "react-native";
import { StyleGuide } from "@shared/ui";

export const styles = StyleSheet.create({
	inputBox: {
		width: "100%",
		justifyContent: "center",
		paddingHorizontal: 10
	},
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
