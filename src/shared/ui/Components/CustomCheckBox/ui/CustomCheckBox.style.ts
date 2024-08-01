import { StyleSheet } from "react-native";
import { StyleGuide } from "@shared/ui/stylesConsts/stylesConsts";

export const styles = StyleSheet.create({
    checkbox: {
        backgroundColor: StyleGuide.BACKGROUNDLIGHT,
        width: 30,
        height: 30,
        borderRadius: 5,
        borderColor: StyleGuide.CHECKBOXBORDER,
        borderWidth: 1
    }
});