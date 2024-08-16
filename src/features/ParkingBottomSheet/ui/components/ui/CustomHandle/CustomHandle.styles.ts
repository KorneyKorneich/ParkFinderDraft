import { StyleGuide } from "@shared/ui";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    customHandle: {
        alignItems: "center",
        paddingVertical: 10,
        backgroundColor: StyleGuide.LIGHT_GREY,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: 100,
        alignSelf: "center",
    },
    customHandleIndicator: {
        backgroundColor: StyleGuide.NORMAL_GREY,
        width: 30,
        height: 6,
        borderRadius: 3,
    },
});
