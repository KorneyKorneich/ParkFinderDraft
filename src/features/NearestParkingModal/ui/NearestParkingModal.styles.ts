import { StyleGuide } from "@shared/ui";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        marginTop: -15,
        marginBottom: 5,
    },
    contentContainer: {
        flex: 1,
        alignItems: "center",
        paddingVertical: 20,
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
    nearestParkingBtn: {
        width: "100%",
        alignItems: "center",
        borderTopColor: StyleGuide.GREY,
        borderTopWidth: 1,
        borderBottomColor: StyleGuide.GREY,
        borderBottomWidth: 1,
        backgroundColor: "rgba(rgba(209, 209, 209, .3))",
    },
    btnArea: {
        flexDirection: "row",
        width: "90%",
        maxWidth: 400,
        alignItems: "center",
        borderRadius: 6,
        justifyContent: "space-around",
        paddingVertical: 5,
    },
    mapArea: {
        width: "100%",
    },
    rating: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    starImg: {
        height: 20,
        width: 20,
    },
});
