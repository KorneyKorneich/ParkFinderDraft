import React from "react";
import { View, Switch } from "react-native";
import { styles } from "./OptionSwitcher.styles";

interface OptionSwitcherProps {
    isSelected: boolean;
    onSwitcherChange: () => void;
}

export const OptionSwitcher = (props: OptionSwitcherProps) => {
    const { isSelected, onSwitcherChange } = props;

    return (
        <View style={styles.container}>
            <Switch value={isSelected} onValueChange={onSwitcherChange} disabled={false} />
        </View>
    );
};
