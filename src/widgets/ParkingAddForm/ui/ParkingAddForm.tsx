import styles from "./ParkingAddForm.styles.ts";
import { Text, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { CustomButton, CustomInput, StyleGuide, FormSwitcher } from "@shared/ui";
import React, { useState } from "react";

interface ParkingAddFormProps {}
interface ParkingAddForm {
    parkingName: string;
}

export const ParkingAddForm = (props: ParkingAddFormProps) => {
    const {} = props;
    const [isAddress, setIsAddress] = useState(true);
    const { control, handleSubmit, setError } = useForm<ParkingAddForm>();

    const handleOnSwitchCoordinatesPress = () => {
        setIsAddress(false);
    };
    const handleOnSwitchAddressPress = () => {
        setIsAddress(true);
    };
    const handleOnMapPick = () => {};

    return (
        <>
            <View style={styles.formContainer}>
                <Text style={styles.formName}>Add Parking Place</Text>
                <Controller
                    control={control}
                    render={({ field: { value, onChange } }) => (
                        <CustomInput
                            titleStyle={styles.parkingNameTitle}
                            title={"Title"}
                            value={value}
                            onChange={onChange}
                            placeholder={"Enter the parking space name"}
                        />
                    )}
                    name={"parkingName"}
                />
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
                        render={({ field: { value, onChange } }) => (
                            <CustomInput
                                titleStyle={styles.parkingNameTitle}
                                value={value}
                                onChange={onChange}
                                placeholder={"Enter the parking space address"}
                            />
                        )}
                        name={"parkingName"}
                    />
                ) : (
                    <>
                        <View style={styles.coordinatesInputContainer}>
                            <View style={styles.coordinatesInput}>
                                <Controller
                                    control={control}
                                    render={({ field: { value, onChange } }) => (
                                        <CustomInput
                                            value={value}
                                            onChange={onChange}
                                            placeholder={"Enter the parking space name"}
                                        />
                                    )}
                                    name={"parkingName"}
                                />
                            </View>
                            <View style={styles.coordinatesInput}>
                                <Controller
                                    control={control}
                                    render={({ field: { value, onChange } }) => (
                                        <CustomInput
                                            value={value}
                                            onChange={onChange}
                                            placeholder={"Enter the parking space name"}
                                        />
                                    )}
                                    name={"parkingName"}
                                />
                            </View>
                        </View>
                    </>
                )}
                <CustomButton
                    title={"Pick point on map"}
                    color={StyleGuide.SEARCH_BTN}
                    textStyle={styles.buttonTextStyle}
                    onPress={handleOnMapPick}
                />
                <Text style={styles.additionalTitle}>Additional:</Text>
                <View style={styles.additionalOptions}>
                    <View style={styles.additionalOption}>
                        <Text style={styles.additionalOptionText}>Additional:</Text>
                    </View>
                    <View style={styles.additionalOption}>
                        <Text style={styles.additionalOptionText}>Additional:</Text>
                    </View>
                    <View style={styles.additionalOption}>
                        <Text style={styles.additionalOptionText}>Additional:</Text>
                    </View>
                </View>
            </View>
        </>
    );
};
