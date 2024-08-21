import { StyleGuide } from "@shared/ui";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    box: {
        flex: 1,
    },
    boxInside: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    drawerItem: {
        backgroundColor: StyleGuide.LOG_OUT_GRAY,
        position: "absolute",
        width: "100%",
        bottom: 5,
        borderRadius: 8,
    },
    logo: {
        flexDirection: "row",
        backgroundColor: StyleGuide.LIGHT_GREEN,
        borderRadius: 5,
        padding: 5,
    },
    firstPartLogo: {
        color: StyleGuide.BLUE,
        fontSize: 24,
        fontWeight: "600",
    },
    secondPartLogo: {
        color: StyleGuide.GREEN,
        fontSize: 24,
        fontWeight: "600",
    },
    userArea: {
        paddingTop: 10,
    },
    userName: {
        fontSize: 18,
        fontWeight: "500",
        paddingTop: 2,
    },
    userIcon: {
        width: 50,
        height: 50,
    },
});
