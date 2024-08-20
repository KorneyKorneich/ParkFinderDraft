import { StyleGuide } from "@shared/ui";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    btnStyles: {
        position: "absolute",
        right: 10,
        bottom: 75,
        width: 60,
        height: 60,
        borderRadius: 50,
        paddingHorizontal: 0,
        backgroundColor: StyleGuide.TRANSPARENT_GRAY,
    },
});
