import { StyleSheet } from "react-native";
import { StyleGuide } from "@shared/ui/stylesConsts/stylesConsts";

const styles = StyleSheet.create({
    switcher: {
        marginVertical: 10,
        marginHorizontal: "auto",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        backgroundColor: StyleGuide.GREY,
        borderRadius: 12,
        padding: 5,
    },
    option: {
        padding: 5,
        width: "49%",
    },
    activeOption: {
        backgroundColor: StyleGuide.WHITE,
        borderRadius: 8,
    },
    optionText: {
        textAlign: "center",
        color: StyleGuide.TEXT_GREY,
    },
    textActive: {
        color: StyleGuide.BLACK,
    },
});
export default styles;
