import { StyleSheet } from "react-native";
import { FONTS, StyleGuide } from "@shared/ui/stylesConsts/stylesConsts.ts";

const styles = StyleSheet.create({
    formContainer: {
        width: "90%",
        marginTop: 10,
        marginHorizontal: "auto",
    },
    formName: {
        fontSize: FONTS.HEADING_1,
        fontWeight: "bold",
        marginVertical: 10,
    },
    parkingNameTitle: {
        fontSize: FONTS.HEADING_4,
    },
    switcher: {
        marginVertical: 10,
        marginHorizontal: "auto",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        backgroundColor: StyleGuide.GREY,
        borderRadius: 12,
        padding: 5,
    },
    coordinatesInputContainer: {
        flexDirection: "row",
    },
    coordinatesInput: {
        width: "50%",
    },
    buttonTextStyle: {
        color: StyleGuide.BLUE,
    },
    additionalTitle: {
        fontSize: FONTS.HEADING_3,
        fontWeight: "bold",
    },
    additionalOption: {
        marginVertical: 5,
    },
    additionalOptionText: {
        fontSize: FONTS.REGULAR_BODY,
    },
});

export default styles;
