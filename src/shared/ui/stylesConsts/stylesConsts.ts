import { Dimensions } from "react-native";

export enum StyleGuide {
	GREY = "rgb(227, 227, 227)",
	WHITE = "rgb(255,255,255)",
	BLACK = "rgba(0,0,0)",
	GREEN = "rgb(51, 173, 95)",
	BLUE = "rgb(0, 123, 255)",
	ERROR = "rgb(255, 99, 134)",
	SEARCH_INPUT = "rgba(255, 255, 255, .8)",
	SEARCH_BORDER = "rgba(209, 209, 209, .8)",
	SEARCH_BTN = "rgba(209, 209, 209, .8)",
	CHECKBOX_BORDER = "rgb(108, 117, 125)",
	BACKGROUND_LIGHT = "rgb(240, 240, 240)",
	TEXT_GREY = "rgb(125, 125, 145)",
}

export enum Fonts {
	HEADING_1 = 40,
	HEADING_2 = 36,
	HEADING_3 = 24,
	HEADING_4 = 20,
	BUTTON_TEXT = 18,
	REGULAR_BODY = 16,
	SMALL_BODY = 14,
}

export enum SIZES {
	HEIGHT = Dimensions.get("screen").height,
	WIDTH = Dimensions.get("screen").width,
}
