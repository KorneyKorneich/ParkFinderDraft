import { View, Keyboard, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { styles } from "./SearchBar.style";
import { CustomButton, CustomInput, StyleGuide } from "@shared/ui";
import { initMapAndSearch } from "../model/searchLocation";
import { useSetlocationStore } from "@entities/user";
import { storeData } from "../lib/asyncStorageFuncs";
import { PreviousSearches } from "./components/PreviousSearches/PreviousSearches";

const image = require("@shared/ui/assets/images/loupe.png");

export const SearchBar = () => {
    const [value, setValue] = useState<string>("");
    const [triger, setTriger] = useState<boolean>(false);
    const [isHintsVisible, setHintsVisible] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [isResult, setRsult] = useState<boolean>(true);

    const { setLocation } = useSetlocationStore();

    const handleSearch = async (value: string) => {
        if (value) {
            setLoading(true);
            const result = await initMapAndSearch(value, setLocation);
            setLoading(false);
            if (result) {
                await storeData(value);
                setRsult(true);
                Keyboard.dismiss();
                setHintsVisible(false);
                setTriger(!triger);
            } else {
                setRsult(false);
            }
        }
    };

    const handleChangeText = (text: string) => {
        setValue(text);
        setHintsVisible(true);
        setRsult(true);
    };

    return (
        <View style={styles.inputAndHints}>
            <View style={styles.controlledInBox}>
                <CustomInput
                    value={value}
                    onSubmitEditing={() => handleSearch(value)}
                    onChangeText={(text) => handleChangeText(text)}
                    boxStyle={styles.inputBoxStyle}
                    style={styles.inputStyles}
                />
                <CustomButton imgPath={image} onPress={() => handleSearch(value)} style={styles.btnStyle} />
                {loading && (
                    <ActivityIndicator style={styles.activityIndicator} size={25} color={StyleGuide.TRANSPARENT_GRAY} />
                )}
            </View>
            {value && isHintsVisible && (
                <PreviousSearches triger={triger} setValue={setValue} handleSearch={handleSearch} isResult={isResult}/>
            )}
        </View>
    );
};
