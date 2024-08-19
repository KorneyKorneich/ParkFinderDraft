import { Dimensions } from "react-native";

export enum StyleGuide {
    NEAREST_PARKING_BTN = "rgba(209, 209, 209, .3)",
    GREY = "rgb(227, 227, 227)",
    LIGHT_GREY = "rgb(211, 211, 211)",
    WHITE = "rgb(255,255,255)",
    BLACK = "rgb(0,0,0)",
    GREEN = "rgb(51, 173, 95)",
    LIGHT_BLUE = "rgb(232, 244, 255)",
    BLUE = "rgb(0, 123, 255)",
    LIGHT_BLUE_BTN = "rgba(0, 123, 255, 0.6)",
    ERROR = "rgb(255, 99, 134)",
    BORDER_GREY = "rgb(239, 240, 246)",
    TRANSPARENT_GRAY = "rgba(209, 209, 209, .8)",
    SEARCH_INPUT = "rgba(255, 255, 255, .8)",
    CHECKBOX_BORDER = "rgb(108, 117, 125)",
    BACKGROUND_LIGHT = "rgb(240, 240, 240)",
    TEXT_GREY = "rgb(125, 125, 145)",
    NORMAL_GREY = "rgb(128, 128, 128)",
}

export enum FONTS {
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
