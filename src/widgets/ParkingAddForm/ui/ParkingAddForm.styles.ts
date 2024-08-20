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
        width: "100%",
        borderRadius: 12,
        padding: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: StyleGuide.GREY,
    },
    coordinatesInputContainer: {
        flexDirection: "row",
    },
    coordinatesInput: {
        borderRadius: 8,
        width: "50%",
    },
    buttonTextStyle: {
        color: StyleGuide.BLUE,
    },
    additionalTitle: {
        fontSize: FONTS.HEADING_3,
        fontWeight: "bold",
    },
    additionalOptions: {
        width: "100%",
    },
    additionalOption: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 5,
    },
    additionalOptionText: {
        width: "70%",
        fontSize: FONTS.REGULAR_BODY,
    },
});

export default styles;
