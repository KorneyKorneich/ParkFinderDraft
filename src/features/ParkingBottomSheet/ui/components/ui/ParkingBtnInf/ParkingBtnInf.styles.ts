import { StyleGuide } from "@shared/ui";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    nearestParkingBtn: {
        width: "100%",
        alignItems: "center",
        borderTopColor: StyleGuide.GREY,
        borderTopWidth: 1,
        borderBottomColor: StyleGuide.GREY,
        borderBottomWidth: 1,
        backgroundColor: StyleGuide.NEAREST_PARKING_BTN,
    },
    btnArea: {
        flexDirection: "row",
        width: "90%",
        maxWidth: 400,
        alignItems: "center",
        borderRadius: 6,
        justifyContent: "space-between",
        paddingVertical: 8,
        overflow: "scroll"
    },
    rating: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        width: 60,
        paddingLeft: 8,
    },
    starImg: {
        height: 20,
        width: 20,
    },
    btnNumber: {
        width: 60,
        fontSize: 16,
        paddingLeft: 15,
    },
    parkingName: {
        flex: 1,
        maxWidth: 400,
        textAlign: "center",
        fontSize: 16,
    },
    ratingText: {
        fontSize: 16,
    },
});
