import { Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./CountryItem.styles.ts";
import { Country } from "../types/countyTypes.ts";

interface CountryItemProps {
    item: Country,
    handleCountryPick: (country: Country) => void,
}

export const CountryItem = (props: CountryItemProps) => {
	const {item, handleCountryPick} = props;


	return (
		<TouchableOpacity onPress={() => handleCountryPick(item)} style={styles.countryContainer}>
			<Image source={{ uri: item.flag }} resizeMode={"contain"} style={{ width: 40, height: 25 }} />
			<Text>{item.name}</Text>
		</TouchableOpacity>
	);
};

