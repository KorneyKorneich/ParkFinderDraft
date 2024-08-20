import React, { useRef, useMemo, useEffect, useState } from "react";
import { Keyboard, Text, View, FlatList } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { styles } from "./ParkingBottomSheet.styles";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { ParkingInf, ParkingSchema } from "@shared/api";
import { useSetlocationStore } from "@entities/user";
import { CustomHandle } from "./components/ui/CustomHandle/CustomHandle";
import ParkingBtnInf from "./components/ui/ParkingBtnInf/ParkingBtnInf";
import { useParkingsStore } from "@entities/parkings";

interface IParkingBottomSheet {
    setIsModalVisible: (isModalVisible: boolean) => void;
    setParkingInf: (parkingInf: ParkingInf) => void;
}

export const ParkingBottomSheet: React.FC<IParkingBottomSheet> = ({
    setIsModalVisible,
    setParkingInf,
}) => {
    const bottomSheetRef = useRef<BottomSheetMethods>(null);
    const [parkingByRating, setParkingByRating] = useState<ParkingSchema[]>();
    const [currentIndex, setCurrentIndex] = useState<number>();
    const { setLocation } = useSetlocationStore();
    const { parkingsMarkers } = useParkingsStore();

    const snapPoints = useMemo(() => [26, 104, "87%"], []);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => {
            currentIndex === 2 && bottomSheetRef.current?.snapToIndex(1);
        });

        return () => {
            keyboardDidShowListener.remove();
        };
    }, [currentIndex]);

    const defineHighestRating = useMemo(() => {
        const highest = parkingsMarkers.sort((a, b) => b.parkingInf.rating - a.parkingInf.rating);
        return highest;
    }, [parkingsMarkers]);

    useEffect(() => {
        setParkingByRating(defineHighestRating);
    }, [parkingsMarkers]);

    const handleMoveBottom = (index: number) => {
        setCurrentIndex(index);
    };

    const handleChooseParking = (value: ParkingSchema) => {
        setIsModalVisible(true);
        setParkingInf(value.parkingInf);
        setLocation(value.location);
        bottomSheetRef.current?.snapToIndex(1);
    };

    const renderItem = ({ item, index }: { item: ParkingSchema; index: number }) => (
        <ParkingBtnInf key={index} handleChooseParking={handleChooseParking} index={index} parkingByRating={item} />
    );

    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={1}
            onChange={(index) => handleMoveBottom(index)}
            snapPoints={snapPoints}
            handleComponent={CustomHandle}
            backgroundStyle={styles.backgroundSyle}
            overDragResistanceFactor={0}>
            <BottomSheetView style={styles.contentContainer}>
                <Text style={styles.text}>Nearest parking spots</Text>
                <View style={styles.mapArea}>
                    <FlatList
                        data={parkingByRating}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        ItemSeparatorComponent={() => <View style={styles.separator} />}
                    />
                </View>
            </BottomSheetView>
        </BottomSheet>
    );
};
