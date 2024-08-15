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
        justifyContent: "space-around",
        paddingVertical: 5,
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
