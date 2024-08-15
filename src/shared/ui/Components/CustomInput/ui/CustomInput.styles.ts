import { StyleSheet, Platform } from "react-native";
import { StyleGuide } from "@shared/ui";

export const styles = StyleSheet.create({
    inputBox: {
        width: "100%",
        justifyContent: "center",
        paddingHorizontal: 10,
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
                alignItems: "center"
            },
            ios: {
                width: "100%",
                backgroundColor: StyleGuide.WHITE,
                padding: 10,
                borderRadius: 8,
                borderColor: StyleGuide.GREY,
                borderWidth: 1,
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
