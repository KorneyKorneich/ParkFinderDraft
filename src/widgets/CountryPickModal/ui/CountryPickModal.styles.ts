import { StyleSheet } from "react-native";
import { StyleGuide } from "@shared/ui";
import { SIZES } from "@shared/ui/stylesConsts/stylesConsts.ts";

const styles = StyleSheet.create({
	modalContainer:{
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},

	modal:{
		height: SIZES.HEIGHT,
		width: SIZES.WIDTH,
		paddingTop: 40,
		paddingHorizontal: 20,
		backgroundColor: StyleGuide.WHITE
	},
	closeModalButton:{
		flexDirection: "row",
		justifyContent: "flex-end",
	},
});

export default styles;
