import { StyleGuide } from "@shared/ui";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        marginTop: -15,
        marginBottom: 5,
    },
    backgroundSyle: {
        backgroundColor: "transparent",
    },
    contentContainer: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 20,
        backgroundColor: StyleGuide.WHITE,
        borderTopColor: StyleGuide.LIGHT_GREY,
        borderTopWidth: 1,
    },
    mapArea: {
        width: "100%",
    },
});
