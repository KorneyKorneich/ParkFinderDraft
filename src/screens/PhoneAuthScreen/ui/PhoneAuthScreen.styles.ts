import { StyleSheet } from "react-native";
import { StyleGuide } from "@shared/ui";

const styles = StyleSheet.create({
	container:{
		width:"90%",
		height:"100%",
		marginHorizontal: "auto",

	},

	img:{
		justifyContent: "center",
		alignItems: "center",
		marginTop: 35
	},

	textContainer:{
		marginTop: "20%",
		justifyContent: "center",
		alignItems: "center",
	},

	title:{
		fontSize: StyleGuide.HEADING_4,
	},
	text:{
		fontSize: StyleGuide.REGULAR_BODY,

	},

	inputContainer:{
		flexDirection: "row",
	}


});

export default styles;
