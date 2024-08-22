import { StyleGuide } from "@shared/ui";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerArea: {
        position: "absolute",
        top: 120,
        right: 0,
        backgroundColor: "transparent",
        justifyContent: "center",
    },
    burgerBtn: {
        marginVertical: 0,
        borderRadius: 0,
        paddingVertical: 10,
        backgroundColor: StyleGuide.TRANSPARENT_GRAY,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
    },
});
