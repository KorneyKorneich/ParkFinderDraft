import { View, Text, SafeAreaView } from "react-native";
import React, { useRef } from "react";
import { CustomButton, Map, StyleGuide } from "@shared/ui";
import { Marker, YaMap } from "react-native-yamap";
import { styles } from "./AddParkingScreen.styles.ts";
import { ParkingAddForm } from "@widgets/ParkingAddForm/ui/ParkingAddForm.tsx";

export const AddParkingScreen = () => {
    const map = useRef<YaMap>(null);

    return (
        <SafeAreaView style={styles.wrapper}>
            {/*<Map mapType={"vector"} rotateGesturesEnabled={false}></Map>*/}
            {/*	<YaMap ref={map} style={styles.map}></YaMap>*/}
            {/*	<CustomButton*/}
            {/*		style={styles.button}*/}
            {/*		title={"Get camera"}*/}
            {/*		color={StyleGuide.GREEN}*/}
            {/*		onPress={() => {*/}
            {/*			const position =*/}
            {/*				map.current &&*/}
            {/*				map.current.getCameraPosition((position) => {*/}
            {/*					console.log(position);*/}
            {/*				});*/}
            {/*		}}*/}
            {/*	/>*/}
            <ParkingAddForm />
        </SafeAreaView>
    );
};
