import styles from "./ParkingAddForm.styles.ts";
import { Text, View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { CustomInput, Switcher } from "@shared/ui";
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
                            placeholder={"Enter the parking space name"}></CustomInput>
                    )}
                    name={"parkingName"}
                />
                <Switcher
                    optionToggle={isAddress}
                    firstOptionTitle={"Address"}
                    secondOptionTitle={"Coordinates"}
                    handleOnFirstOptionPress={handleOnSwitchAddressPress}
                    handleOnSecondOptionPress={handleOnSwitchCoordinatesPress}
                />
            </View>
        </>
    );
};
