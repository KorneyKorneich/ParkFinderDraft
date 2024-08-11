import { StyleSheet } from "react-native";
import { StyleGuide } from "@shared/ui/stylesConsts/stylesConsts";

export const styles = StyleSheet.create({
	modalBox: {
		backgroundColor: StyleGuide.LIGHT_BLUE,
		borderRadius: 10,
		maxWidth: 400,
		justifyContent: "center",
		paddingVertical: 10,
		paddingHorizontal: 30,
		gap: 5,
	},
	parkingName: {
		textAlign: "center",
		color: StyleGuide.BLACK,
		fontSize: 20,
		fontWeight: "500",
	},
	notificImgBox: {
		flexDirection: "row",
		justifyContent: "center",
		paddingVertical: 5,
		gap: 10,
		alignItems: "center",
		backgroundColor: StyleGuide.GREY,
		alignSelf: "center",
		borderRadius: 10,
		paddingHorizontal: 10,
		marginVertical: 5,
	},
	workTimeBox: {
		flexDirection: "row",
		gap: 5,
		fontSize: 20,
		justifyContent: "center",
	},
	workTimeText: {
		fontSize: 16,
	},
	commentBox: {
		justifyContent: "center",
	},
	commentText: {
		textAlign: "center",
		fontSize: 16,
	},
	closeBtn: {
		width: "40%",
		backgroundColor: StyleGuide.LIGHT_BLUE_BTN,
		alignSelf: "center",
		marginTop: 5,
	},
	ratingBox: {
		position: "absolute",
		right: 0,
		top: 0,
		width: 40,
		height: 40,
		backgroundColor: StyleGuide.GREY,
		borderTopRightRadius: 10,
		borderBottomLeftRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	starStyle: {
		height: 32,
		width: 32,
	},
	ratingText: {
		position: "absolute",
		fontSize: 20,
		fontWeight: "600",
	},
	reportBtn: {
		position: "absolute",
		left: 0,
		top: 0,
		width: 40,
		height: 40,
		borderRadius: 0,
		backgroundColor: StyleGuide.GREY,
		borderTopLeftRadius: 10,
		borderBottomRightRadius: 10,
	},
});
