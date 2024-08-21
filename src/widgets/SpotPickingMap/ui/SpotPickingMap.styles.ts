import { StyleSheet } from "react-native";
import { StyleGuide } from "@shared/ui";
import { SIZES } from "@shared/ui/stylesConsts/stylesConsts.ts";

export default StyleSheet.create({
    map: {
        position: "absolute",
        height: "100%",
        backgroundColor: StyleGuide.GREEN,
    },
    modalContainer: {
        position: "relative",
        flex: 1,
        // backgroundColor: StyleGuide.ERROR,
        backgroundColor: StyleGuide.TRANSPARENT_GRAY,
        justifyContent: "flex-end",
    },
    modalContentContainer: {
        padding: 16,
        justifyContent: "space-between",
    },
    closeModalButton: {
        position: "absolute",
        top: SIZES.HEIGHT * 0.2,
        right: 10,
        zIndex: 1,
        backgroundColor: StyleGuide.GREY,
        padding: 10,
        borderRadius: 100,
        alignSelf: "flex-end",
        marginBottom: -10,
    },
    mapContainer: {
        flex: 0.8,
        // backgroundColor: StyleGuide.BLUE,
    },
    mapMarker: {
        position: "absolute",
        zIndex: 10,
        top: "53%",
        left: "45%",
    },
    button: {
        width: "90%",
        marginHorizontal: "auto",
        marginVertical: 40,
    },
});
