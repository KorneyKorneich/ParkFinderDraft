import { StyleSheet } from "react-native";
import { Fonts } from "@shared/ui/stylesConsts/stylesConsts.ts";

const styles = StyleSheet.create({
    container: {
        width: "90%",
        marginHorizontal: "auto",
    },
    img: {
        marginHorizontal: "auto",
        marginTop: 40,
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

    OTPInput: {
        width: "90%",
        marginHorizontal: "auto",
        marginTop: "5%",
    },
    OTPConfirm: {
        marginTop: "10%",
    },
});

export default styles;
