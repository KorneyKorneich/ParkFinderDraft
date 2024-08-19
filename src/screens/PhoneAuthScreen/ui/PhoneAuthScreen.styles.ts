import { StyleSheet } from "react-native";
import { StyleGuide } from "@shared/ui";
import { FONTS } from "@shared/ui/stylesConsts/stylesConsts.ts";

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
        justifyContent: "center",
        alignItems: "center",
        marginTop: 35,
    },

    textContainer: {
        marginTop: "20%",
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        fontSize: FONTS.HEADING_4,
        marginBottom: 5,
    },

    text: {
        fontSize: FONTS.REGULAR_BODY,
    },

    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        marginVertical: 20,
        paddingBottom: 20,
        borderBottomColor: StyleGuide.GREY,
        borderBottomWidth: 1,
    },

    selectCountryContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },

    phoneInput: {
        width: "100%",
    },
    errorMessage: {
        color: StyleGuide.ERROR,
    },
    errorInput: {
        borderBottomColor: StyleGuide.ERROR,
    },
});

export default styles;
