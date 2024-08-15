import React, { useRef, useMemo, useEffect, useState } from "react";
import { Keyboard, Text, View, FlatList } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { styles } from "./ParkingBottomSheet.styles";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { ParkingInf, ParkingSchema } from "@shared/api";
import { useSetlocationStore } from "@entities/user";
import { CustomHandle } from "../components/ui/CustomHandle/CustomHandle";
import ParkingBtnInf from "../components/ui/ParkingBtnInf/ParkingBtnInf";

interface IParkingBottomSheet {
    nearestParkingData: ParkingSchema[];
    setIsModalVisible: (isModalVisible: boolean) => void;
    setParkingInf: (parkingInf: ParkingInf) => void;
}

export const ParkingBottomSheet: React.FC<IParkingBottomSheet> = ({
    nearestParkingData,
    setIsModalVisible,
    setParkingInf,
}) => {
    const bottomSheetRef = useRef<BottomSheetMethods>(null);
    const [currentSnapIndex, setCurrentSnapIndex] = useState<number>(1);
    const [parkingByRating, setParkingByRating] = useState<ParkingSchema[]>();
    const { setLocation } = useSetlocationStore();

    const snapPoints = useMemo(() => ["4%", "15%", "87%"], []);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => {
            bottomSheetRef.current?.snapToIndex(1);
        });

        return () => {
            keyboardDidShowListener.remove();
        };
    }, []);

    const defineHighestRating = useMemo(() => {
        const highest = nearestParkingData.sort((a, b) => b.parkingInf.rating - a.parkingInf.rating);
        return highest;
    }, [nearestParkingData]);

    useEffect(() => {
        setParkingByRating(defineHighestRating);
    }, [nearestParkingData]);

    const handleSheetChanges = (index: number) => {
        setCurrentSnapIndex(index);
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
            index={currentSnapIndex}
            snapPoints={snapPoints}
            handleComponent={CustomHandle}
            backgroundStyle={styles.backgroundSyle}
            overDragResistanceFactor={0}
            onChange={handleSheetChanges}>
            <BottomSheetView style={styles.contentContainer}>
                <Text style={styles.text}>Nearest parking</Text>
                {currentSnapIndex === 1 && parkingByRating ? (
                    <ParkingBtnInf handleChooseParking={handleChooseParking} parkingByRating={parkingByRating[0]} />
                ) : (
                    <View style={styles.mapArea}>
                        <FlatList
                            data={parkingByRating}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </View>
                )}
            </BottomSheetView>
        </BottomSheet>
    );
};
