import React, { useRef, useMemo, useEffect, useState } from "react";
import { Keyboard, Text, View } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { styles } from "./NearestParkingModal.styles";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

const CustomHandle = () => (
    <View style={styles.customHandle}>
        <View style={styles.customHandleIndicator} />
    </View>
);

export const NearestParkingModal = () => {
    const bottomSheetRef = useRef<BottomSheetMethods>(null);

    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => {
            bottomSheetRef.current?.snapToIndex(1);
            setKeyboardVisible(true);
        });

        return () => {
            keyboardDidShowListener.remove();
        };
    }, []);

    const snapPoints = useMemo(() => ["4%", "15%", "87%"], []);

    return (
        <BottomSheet
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            index={isKeyboardVisible ? 1 : 1}
            handleComponent={CustomHandle}
            backgroundStyle={{ backgroundColor: "transparent" }}
            overDragResistanceFactor={0}>
            <BottomSheetView style={styles.contentContainer}>
                <Text style={styles.text}>Nearest parking</Text>
            </BottomSheetView>
        </BottomSheet>
    );
};
