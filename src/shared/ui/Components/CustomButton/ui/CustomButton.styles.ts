import { StyleSheet } from "react-native";
import { StyleGuide } from "@shared/ui/stylesConsts/stylesConsts";

export const styles = StyleSheet.create({
    btnArea: {
        backgroundColor: StyleGuide.BLUE,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 2
    },
    title: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
        color: StyleGuide.WHITE
    },
    customButtonContainer: {
        width: "100%",
        padding: 15,
    },
});
