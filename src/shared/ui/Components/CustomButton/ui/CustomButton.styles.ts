import { StyleSheet } from "react-native";
import { StyleGuide } from "@shared/ui";

export const styles = StyleSheet.create({
	customButtonContainer:{
		width: "100%",
		backgroundColor: StyleGuide.GREEN,
		padding: 15,
		borderRadius: 12,
		marginVertical: 10
	},
	buttonTitle:{
		textAlign: "center",
		fontSize: 18,
		fontWeight: "bold",
		color: StyleGuide.WHITE
	},

});
