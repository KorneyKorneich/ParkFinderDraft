import { StyleGuide } from "@shared/ui";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    hintsArea: {
        backgroundColor: StyleGuide.HINTS_GRAY,
        width: "80%",
        borderRadius: 6,
        marginTop: 4,
    },
    btnStyle: {
        paddingHorizontal: 0,
        marginVertical: 0,
        backgroundColor: "transparent",
        textAlign: "left",
    },
    textStyle: {
        color: StyleGuide.NORMAL_GREY,
        alignSelf: "flex-start",
        paddingLeft: 10,
        fontSize: 15,
        paddingVertical: 3,
        fontWeight: "500"
    },
    separator: {
        height: 1,
        backgroundColor: StyleGuide.TRANSPARENT_GRAY,
    },
    noResult: {
        padding: 10,
        color: StyleGuide.NORMAL_GREY,
        fontSize: 15,
    }
});
