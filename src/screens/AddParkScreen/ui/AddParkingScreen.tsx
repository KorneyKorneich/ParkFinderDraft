import { SafeAreaView } from "react-native";
import React from "react";
import { styles } from "./AddParkingScreen.styles.ts";
import { AuthorizedStackRoutesProps } from "@shared/api";
import { ParkingAddForm } from "@widgets/ParkingAddForm";

export const AddParkingScreen = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <ParkingAddForm />
        </SafeAreaView>
    );
};
