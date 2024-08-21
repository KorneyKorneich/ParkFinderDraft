import React, { useEffect, useRef } from "react";
import { CloseIcon, CustomButton, MapMarker, SIZES, StyleGuide } from "@shared/ui";
import { Map } from "@features/Map";
import styles from "./SpotPickingMap.styles.ts";
import { Modal, TouchableOpacity, View } from "react-native";
import { Geocoder, Point, YaMap } from "react-native-yamap";
import { Nullable } from "@shared/api";
import { useSetlocationStore } from "@entities/user/index.ts";

interface SpotPickModalProps {
    isModalVisible: boolean;
    handleModalClose: () => void;
    setIsModalOpen: (open: boolean) => void;
    setMarker: (position: Point) => void;
    setAddress: (address: string, coordinates: Point) => void;
}

export const SpotPickingMap = ({
    handleModalClose,
    isModalVisible,
    setMarker,
    setAddress,
    setIsModalOpen,
}: SpotPickModalProps) => {
    const mapRef = useRef<Nullable<YaMap>>(null);
    const { setLocation, currentLocation } = useSetlocationStore();

    const handleSpotPick = () => {
        if (mapRef?.current) {
            mapRef.current.getCameraPosition(async (position) => {
                const newMarker = position.point;
                setMarker(newMarker);
                const address = await Geocoder.geoToAddress(newMarker);
                address && setAddress(address.formatted, newMarker);
                setIsModalOpen(false);
            });
        }
    };

    useEffect(() => {
        setLocation(currentLocation);
    }, [isModalVisible]);

    return (
        <Modal transparent visible={isModalVisible} animationType="slide" onRequestClose={handleModalClose}>
            <View style={styles.modalContainer}>
                <TouchableOpacity onPress={handleModalClose} style={styles.closeModalButton}>
                    <CloseIcon height={30} width={30} />
                </TouchableOpacity>
                <View style={styles.mapContainer}>
                    <View style={styles.mapMarker}>
                        <MapMarker height={40} width={40} color={StyleGuide.GREEN} />
                    </View>
                    <Map mapRef={mapRef} pressable={false} height={SIZES.HEIGHT} />
                </View>
                <CustomButton
                    style={styles.button}
                    title={"Pick the spot"}
                    color={StyleGuide.GREEN}
                    onPress={handleSpotPick}
                />
            </View>
        </Modal>
    );
};
