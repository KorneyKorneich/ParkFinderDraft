import { StyleSheet } from "react-native";
import { StyleGuide } from "@shared/ui";
import { Fonts } from "@shared/ui/stylesConsts/stylesConsts.ts";

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: "100%",
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
        fontSize: Fonts.HEADING_4,
        marginBottom: 5,
    },

    text: {
        fontSize: Fonts.REGULAR_BODY,
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
});

export default styles;
