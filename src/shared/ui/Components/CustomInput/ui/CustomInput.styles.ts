import { StyleSheet } from "react-native";
import { StyleGuide } from "@shared/ui";

export const styles = StyleSheet.create({
    inputBox: {
        width: "100%",
        justifyContent: "center",
    },
    container: {
        flexDirection: "column",
        gap: 5,
    },
    title: {
        fontSize: 12,
    },
    inputContainer: {
        width: "100%",
        backgroundColor: StyleGuide.WHITE,
        padding: 10,
        borderRadius: 8,
        flexDirection: "row",
    },
    input: {
        flex: 1,
    },
    error: {
        color: StyleGuide.ERROR,
        borderColor: StyleGuide.ERROR,
    },
    eyeIcon: {
        width: 20,
        height: 20,
    },
});
