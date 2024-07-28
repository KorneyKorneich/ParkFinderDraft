import { StyleSheet } from "react-native";
import { appColors } from "../../constants/appColors";

export const styles = StyleSheet.create({
    btnArea: {
        backgroundColor: appColors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 2
    },
    title: {
        color: appColors.text,
        fontSize: 18
    }
});