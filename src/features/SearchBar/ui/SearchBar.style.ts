import { StyleGuide } from "@shared/ui/";
import { Platform, StyleSheet } from "react-native";
import { SIZES } from "@shared/ui/stylesConsts/stylesConsts.ts";

export const styles = StyleSheet.create({
    controlledInBox: {
        ...Platform.select({
            android: {
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                zIndex: 2,
                top: 20,
                left: "20%",
                width: "80%",
                transform: [{ translateX: -40 }],
            },
            ios: {
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                zIndex: 2,
                top: 20,
                left: "20%",
                width: "80%",
                transform: [{ translateX: -40 }],
                backgroundColor: StyleGuide.WHITE,
                borderRadius: 12,
                height: SIZES.HEIGHT * 0.06,
                borderWidth: 1,
                borderColor: StyleGuide.GREY,
            },
        }),
    },
    inputStyles: {
        ...Platform.select({
            android: {
                backgroundColor: StyleGuide.SEARCH_INPUT,
                borderTopLeftRadius: 12,
                borderBottomLeftRadius: 12,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                paddingLeft: 10,
                borderColor: StyleGuide.TRANSPARENT_GRAY,
                borderWidth: 1,
            },
            ios: {},
        }),
    },
    inputBoxStyle: {
        paddingHorizontal: 0,
        width: "80%",
    },
    btnStyle: {
        ...Platform.select({
            android: {
                width: "20%",
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                backgroundColor: StyleGuide.TRANSPARENT_GRAY,
                height: "100%",
            },
            ios: {
                width: "20%",
                backgroundColor: StyleGuide.TRANSPARENT_GRAY,
                height: "100%",
            },
        }),
    },
});
