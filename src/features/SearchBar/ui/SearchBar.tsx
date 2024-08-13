import { TextInput, View } from "react-native";
import React, { useRef, useState } from "react";
import { CustomButton } from "@shared/ui/index";
import { styles } from "./SearchBar.style";
import { CustomInput } from "@shared/ui";

export const SearchBar = () => {
    const image = require("@shared/ui/assets/images/loupe.png");
    const [value, setValue] = useState<string>();

    return (
        <View style={styles.controlledInBox}>
            <CustomInput
                value={value}
                onChangeText={setValue}
                boxStyle={styles.inputBoxStyle}
                style={styles.inputStyles}
            />
            <CustomButton imgPath={image} style={styles.btnStyle} />
        </View>
    );
};
