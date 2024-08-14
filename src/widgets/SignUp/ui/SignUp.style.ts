import { StyleSheet } from "react-native";
import { StyleGuide } from "@shared/ui";

export const styles = StyleSheet.create({
    textInputBox: {
        marginVertical: 10,
    },
    errorMessage: {
        color: StyleGuide.ERROR,
    },
    inputStyles: {
        borderWidth: 1,
        borderColor: StyleGuide.GREY,
    },
});
