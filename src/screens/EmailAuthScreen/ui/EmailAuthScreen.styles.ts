import { StyleSheet } from "react-native";
import { StyleGuide } from "@shared/ui";

export const styles = StyleSheet.create({
    authScreenContainer: {
        width: "90%",
        padding: 20,
        marginHorizontal: "auto",
    },
    logoWrapper: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "20%",
        marginTop: "10%",
    },
    bottomOptions: {
        marginVertical: 10,
    },

    separator: {
        flexDirection: "row",
        alignItems: "center",
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: StyleGuide.GREY,
    },

    separatorText: {
        width: 50,
        textAlign: "center",
        color: StyleGuide.GREY,
        fontWeight: "bold",
    },

    buttonsContainer: {
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },

    authWithGoogle: {
        padding: 20,
        backgroundColor: StyleGuide.WHITE,
        width: "49%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
    },
    authWithPhone: {
        padding: 20,
        backgroundColor: StyleGuide.WHITE,
        width: "49%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
    },
});
