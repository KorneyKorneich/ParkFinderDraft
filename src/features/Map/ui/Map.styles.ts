import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const vw = (percentage: number) => {
    return (width * percentage) / 100;
};

const vh = (percentage: number) => {
    return (height * percentage) / 100;
};

export const styles = StyleSheet.create({
    map: {
        width: vw(100),
        height: vh(100),
    },
});
