import { StyleSheet, Platform } from "react-native";
import { StyleGuide } from "@shared/ui";

export const styles = StyleSheet.create({
    inputBox: {
        ...Platform.select({
            android: {
                width: "100%",
                justifyContent: "center",
                paddingHorizontal: 10,
            },
            ios: {
                width: "100%",
                justifyContent: "center",
            },
        }),
    },
    container: {
        flexDirection: "column",
        gap: 5,
    },
    title: {
        fontSize: 12,
    },
    inputContainer: {
        ...Platform.select({
            android: {
                borderRadius: 8,
                flexDirection: "row",
                alignItems: "center",
            },
            ios: {
                width: "100%",
                backgroundColor: StyleGuide.WHITE,
                padding: 10,
                borderRadius: 8,
                flexDirection: "row",
            },
        }),
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
