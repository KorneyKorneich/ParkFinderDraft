import { StyleSheet } from "react-native";
import { StyleGuide } from "@shared/ui/stylesConsts/stylesConsts";

export const styles = StyleSheet.create({
    btnArea: {
        backgroundColor: StyleGuide.BLUE,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 2
    },
    title: {
        color: StyleGuide.BLACK,
        fontSize: 18
    }
});