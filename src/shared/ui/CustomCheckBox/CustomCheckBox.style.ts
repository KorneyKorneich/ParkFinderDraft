import { StyleSheet } from "react-native";
import { appColors } from "../../constants/appColors";

export const styles = StyleSheet.create({
    checkbox: {
        backgroundColor: appColors.backgroundLight,
        width: 30,
        height: 30,
        borderRadius: 5,
        borderColor: appColors.border,
        borderWidth: 1
    }
});