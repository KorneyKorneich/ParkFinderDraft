import { Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./CountryItem.styles.ts";
import { Country } from "../types/countyTypes.ts";
import { CustomImage } from "@shared/ui";

interface CountryItemProps {
    item: Country;
    handleCountryPick: (country: Country) => void;
}

export const CountryItem = ({ item, handleCountryPick }: CountryItemProps) => {
    const handleOnCountryPick = () => {
        handleCountryPick(item);
    };

    return (
        <TouchableOpacity onPress={handleOnCountryPick} style={styles.countryContainer}>
            <CustomImage path={{ uri: item.flag }} resizeMode={"contain"} />
            <Text>{item.name}</Text>
        </TouchableOpacity>
    );
};
