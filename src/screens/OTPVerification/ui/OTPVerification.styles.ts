import { StyleSheet } from "react-native";
import { Fonts, StyleGuide } from "@shared/ui/stylesConsts/stylesConsts.ts";

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        height: "100%",
        backgroundColor: StyleGuide.WHITE,
    },
    container: {
        width: "90%",
        marginHorizontal: "auto",
    },
    img: {
        width: 200,
        height: 200,
        marginHorizontal: "auto",
        marginTop: 40,
    },
    textContainer: {
        marginTop: "20%",
        justifyContent: "center",
        alignItems: "center",
    },

	title:{
		fontSize: Fonts.HEADING_4,
		marginBottom: 5
	},

	text:{
		fontSize: Fonts.REGULAR_BODY,
	},

	OTPInput:{
		width: "90%",
		marginHorizontal: "auto",
		marginTop: "5%"
	},
	OTPConfirm:{
		marginTop: "10%"
	}
});

export default styles;
