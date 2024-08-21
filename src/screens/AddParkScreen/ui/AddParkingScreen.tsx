import { SafeAreaView } from "react-native";
import React from "react";
import { styles } from "./AddParkingScreen.styles.ts";
import { ParkingAddForm } from "@widgets/ParkingAddForm/ui/ParkingAddForm.tsx";
import { AuthorizedStackRoutesProps } from "@shared/api";

export const AddParkingScreen = ({ navigation }: AuthorizedStackRoutesProps<"AddParkScreen">) => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <ParkingAddForm navigation={navigation} />
        </SafeAreaView>
    );
};
