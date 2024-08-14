import { View } from "react-native";
import React, { useState } from "react";
import { styles } from "./SearchBar.style";
import { CustomButton, CustomInput } from "@shared/ui";
import { initMapAndSearch } from "../model/searchLocation";
import { useSetlocationStore } from "@entities/user/model/setlocationStore/setlocationStore";

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
            {/*TS2322: Type string | undefined is not assignable to type string
Type undefined is not assignable to type string
CustomInput.tsx(10, 5): The expected type comes from property value which is declared here on type IntrinsicAttributes & CustomInputProps*/}
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
