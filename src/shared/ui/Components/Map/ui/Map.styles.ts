import {  StyleSheet } from "react-native";
import { SIZES } from "@shared/ui/stylesConsts/stylesConsts";

const vw = (percentage: number) => {
  return (SIZES.WIDTH * percentage) / 100;
};

const vh = (percentage: number) => {
  return (SIZES.HEIGHT * percentage) / 100;
};

export const styles = StyleSheet.create({
    map: {
        width: vw(100), 
        height: vh(100),
    },
});