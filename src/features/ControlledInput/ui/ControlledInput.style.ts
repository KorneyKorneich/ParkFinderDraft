import { StyleGuide } from "@shared/ui/stylesConsts/stylesConsts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    controlledInBox: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        position: 'absolute',
        zIndex: 2,
        top: 20,
        left: '20%',
        width: '80%',
        transform: [{ translateX: -40 }],
    },
    inputStyles: {
        backgroundColor: StyleGuide.SEARCHINPUT,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        paddingLeft: 10,
        borderColor: StyleGuide.SEARCHBORDER,
        borderWidth: 1,
    },
    inputBoxStyle: {
        paddingHorizontal: 0,
        width: '80%'
    },
    btnStyle: {
        width: '20%',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        backgroundColor: StyleGuide.SEARCHBTN, 
        height: '100%',
    }
});