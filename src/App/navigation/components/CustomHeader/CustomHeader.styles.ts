import { StyleGuide } from "@shared/ui";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerArea: {
        position: "absolute",
        top: 140,
        left: 0,
        backgroundColor: "transparent",
        justifyContent: "center",
    },
    burgerBtn: {
        marginVertical: 0,
        borderRadius: 0,
        paddingVertical: 10,
        backgroundColor: StyleGuide.TRANSPARENT_GRAY,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
    },
});
