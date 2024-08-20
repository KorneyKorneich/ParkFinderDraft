import { SafeAreaView } from "react-native";
import React from "react";
import { styles } from "./AddParkingScreen.styles.ts";
import { ParkingAddForm } from "@widgets/ParkingAddForm/ui/ParkingAddForm.tsx";

export const AddParkingScreen = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <ParkingAddForm />
        </SafeAreaView>
    );
};
