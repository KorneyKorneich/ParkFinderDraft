import { StyleSheet } from "react-native";
import { StyleGuide } from "@shared/ui";

export const styles = StyleSheet.create({
	authScreenContainer:{
		width: "90%",
		padding: 20,
		marginHorizontal: "auto",
	},
	logoWrapper:{
		justifyContent: "center",
		alignItems: "center",
	},
	switcher:{
		marginVertical: 10,
		marginHorizontal: "auto",
		flexDirection: "row",
		justifyContent:"space-around",
		width: "100%",
		backgroundColor: StyleGuide.GREY,
		borderRadius: 12,
		padding: 5,

	},
	signUp:{
		padding: 5,
		width: "49%",

	},
	signUpText: {
		textAlign: "center",
		color: StyleGuide.TEXT_GREY,
	},
	signIn:{
		padding: 5,
		width: "49%",
	},
	signInText: {
		textAlign: "center",
		color: StyleGuide.TEXT_GREY,
	},
	active:{
		backgroundColor: StyleGuide.WHITE,
		borderRadius: 8,
	},
	textActive:{
		color: StyleGuide.BLACK
	}
});
