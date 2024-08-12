import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        marginTop: -10
    },
    contentContainer: {
        flex: 1,
        alignItems: "center",
        padding: 20,
        backgroundColor: "white",
        borderTopColor: "lightgray",
        borderTopWidth: 1,
    },
    customHandle: {
        alignItems: "center",
        paddingVertical: 10,
        backgroundColor: "lightgray",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: 100,
        alignSelf: "center",
    },
    customHandleIndicator: {
        backgroundColor: "gray",
        width: 30,
        height: 6,
        borderRadius: 3,
    },
});
