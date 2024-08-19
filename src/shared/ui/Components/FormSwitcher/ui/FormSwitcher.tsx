import styles from "./FormSwitcher.styles.ts";
import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface SwitcherProps {
    optionToggle: boolean;
    firstOptionTitle: string;
    secondOptionTitle: string;
    handleOnFirstOptionPress: () => void;
    handleOnSecondOptionPress: () => void;
}

export const FormSwitcher = (props: SwitcherProps) => {
    const { optionToggle, handleOnFirstOptionPress, handleOnSecondOptionPress, firstOptionTitle, secondOptionTitle } =
        props;

    return (
        <>
            <View style={styles.switcher}>
                <TouchableOpacity
                    onPress={handleOnFirstOptionPress}
                    style={[styles.option, optionToggle ? styles.activeOption : null]}>
                    <Text style={[styles.optionText, optionToggle ? styles.textActive : null]}>{firstOptionTitle}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleOnSecondOptionPress}
                    style={[styles.option, !optionToggle ? styles.activeOption : null]}>
                    <Text style={[styles.optionText, !optionToggle ? styles.textActive : null]}>
                        {secondOptionTitle}
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    );
};
