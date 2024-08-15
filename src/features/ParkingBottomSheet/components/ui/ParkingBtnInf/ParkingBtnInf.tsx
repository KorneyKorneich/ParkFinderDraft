import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { CustomImage } from "@shared/ui";
import { styles } from "./ParkingBtnInf.styles";
import { ParkingSchema } from "@shared/api";

const starImg = require("@shared/ui/assets/images/star.png");

interface IParkingBtnInf {
    handleChooseParking: (value: ParkingSchema) => void;
    parkingByRating: ParkingSchema;
    index?: number;
}

const ParkingBtnInf: React.FC<IParkingBtnInf> = ({ handleChooseParking, parkingByRating, index }) => {
    const { parkingInf } = parkingByRating;

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handleChooseParking(parkingByRating)}
            style={styles.nearestParkingBtn}>
            <View style={styles.btnArea}>
                <Text>{index ? index + 1 : 1.}</Text>
                <Text>{parkingInf.parkingName}</Text>
                <View style={styles.rating}>
                    <CustomImage path={starImg} style={styles.starImg} />
                    <Text>{parkingInf.rating}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ParkingBtnInf;
