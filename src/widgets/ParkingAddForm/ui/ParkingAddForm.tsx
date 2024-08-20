import styles from "./ParkingAddForm.styles.ts";
import { Text, View } from "react-native";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { CustomButton, CustomInput, StyleGuide, FormSwitcher, OptionSwitcher } from "@shared/ui";
import React, { useState } from "react";
import { Point } from "react-native-yamap";
import { parkingSpotSchema, sendParkingSpotInfo } from "../api/funcs.ts";
import { SpotPickingMap } from "@widgets/SpotPickingMap";

interface AdditionalOptionsType {
    isPaid: boolean;
    isCharge: boolean;
    isPlaceForDisabled: boolean;
}

interface ParkingAddFormSchema {
    parkingName: string;
    description: string;
    address: string;
    coordinates?: { lat: number; lng: number };
}

export const ParkingAddForm = () => {
    const [isAddress, setIsAddress] = useState<boolean>(true);
    const { control, setValue, handleSubmit } = useForm<ParkingAddFormSchema>();
    const [additionalOptions, setAdditionalOptions] = useState<AdditionalOptionsType>({
        isPaid: false,
        isCharge: false,
        isPlaceForDisabled: false,
    });
    const [isMapVisible, setIsMapVisible] = useState(false);
    const [marker, setMarker] = useState<Point>();
    const handleToggleOption = (option: keyof AdditionalOptionsType) => {
        setAdditionalOptions((prev) => ({ ...prev, [option]: !prev[option] }));
    };

    const handleSpotAdding: SubmitHandler<ParkingAddFormSchema> = async (data) => {
        if (marker) {
            const parkingSpotData: parkingSpotSchema = {
                location: marker,
                id: 4,
                approvedStatus: false,
                parkingInf: {
                    parkingName: data.parkingName,
                    workingHours: null,
                    rating: null,
                    comment: null,
                    charging: additionalOptions.isCharge,
                    paid: additionalOptions.isPaid,
                    handicap: additionalOptions.isPlaceForDisabled,
                },
            };
            await sendParkingSpotInfo(parkingSpotData);
        }
    };

    const setAddress = (address: string, coordinates: Point) => {
        setValue("address", address);
        setValue("coordinates.lat", coordinates.lat);
        setValue("coordinates.lng", coordinates.lon);
    };
    const handleOnSwitchCoordinatesPress = () => setIsAddress(false);
    const handleOnSwitchAddressPress = () => setIsAddress(true);

    const handleMapOpen = () => {
        setIsMapVisible(true);
    };
    const handleMapClose = () => {
        setIsMapVisible(false);
    };

    return (
        <>
            <View style={styles.formContainer}>
                <Text style={styles.formName}>Add Parking Place</Text>
                <Controller
                    control={control}
                    name="parkingName"
                    render={({ field: { value, onChange } }) => (
                        <CustomInput
                            titleStyle={styles.parkingNameTitle}
                            inputStyles={styles.input}
                            value={value}
                            onChangeText={onChange}
                            placeholder={"Enter the parking spot name"}
                        />
                    )}
                />
                <View style={styles.parkingSpotDescription}>
                    <Controller
                        control={control}
                        name="description"
                        render={({ field: { value, onChange } }) => (
                            <CustomInput
                                inputStyles={[styles.input, styles.descriptionInput]}
                                value={value}
                                multiline={true}
                                numberOfLines={2}
                                onChangeText={onChange}
                                placeholder={"Tell everyone something about this spot"}
                            />
                        )}
                    />
                </View>

                <FormSwitcher
                    optionToggle={isAddress}
                    firstOptionTitle={"Address"}
                    secondOptionTitle={"Coordinates"}
                    handleOnFirstOptionPress={handleOnSwitchAddressPress}
                    handleOnSecondOptionPress={handleOnSwitchCoordinatesPress}
                />
                {isAddress ? (
                    <Controller
                        control={control}
                        name="address"
                        render={({ field: { value, onChange } }) => (
                            <CustomInput
                                inputStyles={styles.input}
                                value={value}
                                onChangeText={onChange}
                                placeholder={"Enter the parking space address"}
                            />
                        )}
                    />
                ) : (
                    <View style={styles.coordinatesInputContainer}>
                        <View style={styles.coordinatesInput}>
                            <Controller
                                control={control}
                                name="coordinates.lat"
                                render={({ field: { value, onChange } }) => (
                                    <CustomInput
                                        value={value?.toString()}
                                        onChangeText={onChange}
                                        placeholder={"Enter latitude"}
                                        titleStyle={styles.parkingNameTitle}
                                        inputStyles={styles.input}
                                    />
                                )}
                            />
                        </View>
                        <View style={styles.coordinatesInput}>
                            <Controller
                                control={control}
                                name="coordinates.lng"
                                render={({ field: { value, onChange } }) => (
                                    <CustomInput
                                        value={value?.toString()}
                                        onChangeText={onChange}
                                        placeholder={"Enter longitude"}
                                        titleStyle={styles.parkingNameTitle}
                                        inputStyles={styles.input}
                                    />
                                )}
                            />
                        </View>
                    </View>
                )}
                <CustomButton
                    title={"Pick point on map"}
                    color={StyleGuide.LIGHT_GREY}
                    textStyle={styles.buttonTextStyle}
                    onPress={handleMapOpen}
                />
                <Text style={styles.additionalTitle}>Additional options:</Text>
                <View style={styles.additionalOptions}>
                    <View style={styles.additionalOption}>
                        <Text style={styles.additionalOptionText}>Paid</Text>
                        <View style={styles.switcher}>
                            <OptionSwitcher
                                onSwitcherChange={() => handleToggleOption("isPaid")}
                                isSelected={additionalOptions.isPaid}
                            />
                        </View>
                    </View>
                    <View style={styles.additionalOption}>
                        <Text style={styles.additionalOptionText}>Charge</Text>
                        <View style={styles.switcher}>
                            <OptionSwitcher
                                onSwitcherChange={() => handleToggleOption("isCharge")}
                                isSelected={additionalOptions.isCharge}
                            />
                        </View>
                    </View>
                    <View style={styles.additionalOption}>
                        <Text style={styles.additionalOptionText}>Reserved for disabled</Text>
                        <View style={styles.switcher}>
                            <OptionSwitcher
                                onSwitcherChange={() => handleToggleOption("isPlaceForDisabled")}
                                isSelected={additionalOptions.isPlaceForDisabled}
                            />
                        </View>
                    </View>
                </View>
                <CustomButton
                    title={"Add spot"}
                    onPress={handleSubmit(async (data) => {
                        await handleSpotAdding(data);
                    })}
                    color={StyleGuide.GREEN}
                />
            </View>
            {isMapVisible && (
                <SpotPickingMap
                    setIsModalOpen={setIsMapVisible}
                    setMarker={setMarker}
                    setAddress={setAddress}
                    handleModalClose={handleMapClose}
                    isModalVisible={isMapVisible}
                />
            )}
        </>
    );
};
