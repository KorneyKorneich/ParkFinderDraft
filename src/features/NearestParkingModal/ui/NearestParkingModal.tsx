import React, { useRef, useMemo, useEffect, useState } from "react";
import { Keyboard, Text, TouchableOpacity, View } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { styles } from "./NearestParkingModal.styles";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { ParkingInf, ParkingSchema } from "@shared/api";
import { CustomImage, ParkingInfModal } from "@shared/ui";
import { useSetlocationStore } from "@entities/user";

const starImg = require("../../../shared/ui/assets/images/star.png");

interface INearestParkingModal {
    nearestParkingData: ParkingSchema[];
}

const CustomHandle = () => (
    <View style={styles.customHandle}>
        <View style={styles.customHandleIndicator} />
    </View>
);

export const NearestParkingModal: React.FC<INearestParkingModal> = ({ nearestParkingData }) => {
    const bottomSheetRef = useRef<BottomSheetMethods>(null);
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const [currentSnapIndex, setCurrentSnapIndex] = useState<number>(1);
    const [parkingInf, setParkingInf] = useState<ParkingInf>();
    const [parkingByRating, setParkingByRating] = useState<ParkingSchema[]>();
    const { setLocation } = useSetlocationStore();

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

    const handleChoseParking = (value: ParkingSchema) => {
        setModalVisible(true);
        setParkingInf(value.parkingInf);
        setLocation(value.location);
        bottomSheetRef.current?.snapToIndex(1);
    };

    const snapPoints = useMemo(() => ["4%", "15%", "87%"], []);

    return (
        <>
            <BottomSheet
                ref={bottomSheetRef}
                index={currentSnapIndex}
                snapPoints={snapPoints}
                handleComponent={CustomHandle}
                backgroundStyle={{ backgroundColor: "transparent" }}
                overDragResistanceFactor={0}
                onChange={handleSheetChanges}>
                <BottomSheetView style={styles.contentContainer}>
                    <Text style={styles.text}>Nearest parking</Text>
                    {currentSnapIndex === 1 && parkingByRating ? (
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => handleChoseParking(parkingByRating[0])}
                            style={styles.nearestParkingBtn}>
                            <View style={styles.btnArea}>
                                <Text>1.</Text>
                                <Text>{parkingByRating[0]?.parkingInf.parkingName}</Text>
                                <View style={styles.rating}>
                                    <CustomImage path={starImg} style={styles.starImg} />
                                    <Text>{parkingByRating[0]?.parkingInf.rating}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ) : (
                        <View style={styles.mapArea}>
                            {parkingByRating?.map((value, id) => (
                                <TouchableOpacity
                                    key={id}
                                    onPress={() => handleChoseParking(value)}
                                    activeOpacity={0.8}
                                    style={styles.nearestParkingBtn}>
                                    <View style={styles.btnArea}>
                                        <Text>{id + 1}.</Text>
                                        <Text>{value.parkingInf.parkingName}</Text>
                                        <View style={styles.rating}>
                                            <CustomImage path={starImg} style={styles.starImg} />
                                            <Text>{value.parkingInf.rating}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    )}
                </BottomSheetView>
            </BottomSheet>
            {parkingInf && (
                <ParkingInfModal
                    parkingInf={parkingInf}
                    isModalVisible={isModalVisible}
                    setModalVisible={setModalVisible}
                />
            )}
        </>
    );
};
