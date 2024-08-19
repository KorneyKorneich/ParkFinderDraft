import { StyleSheet } from "react-native";
import { SIZES } from "@shared/ui/stylesConsts/stylesConsts";

export const styles = StyleSheet.create({
    map: {
        width: SIZES.WIDTH,
    },
    button: {
        zIndex: 100,
        position: "absolute",
    },
});
