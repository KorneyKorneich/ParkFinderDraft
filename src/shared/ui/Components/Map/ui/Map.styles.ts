import { StyleSheet } from "react-native";
import { SIZES } from "@shared/ui/stylesConsts/stylesConsts";

export const styles = StyleSheet.create({
    map: {
        width: SIZES.WIDTH,
        height: SIZES.HEIGHT,
    },
    button: {
        zIndex: 100,
        position: "absolute",
    },
});
