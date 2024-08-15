import { View } from "react-native";
import React, { useState } from "react";
import { CustomButton } from "@shared/ui/index";
import { styles } from "./SearchBar.style";
import { CustomInput } from "@shared/ui";
import { initMapAndSearch } from "../model/searchLocation";
import { useSetlocationStore } from "@entities/user/index";

export const SearchBar = () => {
    const image = require("@shared/ui/assets/images/loupe.png");
    const [value, setValue] = useState<string>();

    const { setLocation } = useSetlocationStore();

    const handleSearch = () => {
        if (value) {
            initMapAndSearch(value, setLocation);
        }
    };

    return (
        <View style={styles.controlledInBox}>
            <CustomInput
                value={value}
                onChangeText={setValue}
                boxStyle={styles.inputBoxStyle}
                style={styles.inputStyles}
            />
            <CustomButton imgPath={image} onPress={handleSearch} style={styles.btnStyle} />
        </View>
    );
};
