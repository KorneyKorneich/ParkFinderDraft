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
		marginBottom: "20%",
		marginTop: "10%"
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
	},

	bottomOptions:{
		marginVertical: 10
	},

	separator: {
		flexDirection: "row",
		alignItems: "center"
	},
	line:{
		flex: 1,
		height: 1,
		backgroundColor: StyleGuide.GREY
	},

	separatorText:{
		width: 50,
		textAlign: "center",
		color: StyleGuide.GREY,
		fontWeight: "bold",
	},

	buttonsContainer:{
		marginTop: 15,
		flexDirection: "row",
		justifyContent: "space-evenly",
	},

	authWithGoogle:{
		padding: 20,
		backgroundColor: StyleGuide.WHITE,
		width: "49%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 12,
	},
	authWithPhone:{
		padding: 20,
		backgroundColor: StyleGuide.WHITE,
		width: "49%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 12,
	}
});
