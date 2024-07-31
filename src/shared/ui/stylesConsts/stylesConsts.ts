import { Dimensions } from "react-native";

export enum StyleGuide {
    GREY = "#e3e3e3",
    WHITE ="#FFFFFF",
    BLACK= "#130F26",
    GREEN ="#33AD5F",


    //TEXT COLORS
    TEXT_GREY = "#7D7D91",

}

export enum Fonts {
    HEADING_1 = 40,
    HEADING_2 = 36,
    HEADING_3 = 24,
    HEADING_4 = 20,
    BUTTON_TEXT = 18,
    REGULAR_BODY = 16,
    SMALL_BODY = 14
}

export enum SIZES {
    HEIGHT = Dimensions.get("screen").height,
    WIDTH = Dimensions.get("screen").width
}

