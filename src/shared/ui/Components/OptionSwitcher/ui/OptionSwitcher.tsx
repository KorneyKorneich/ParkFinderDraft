import React, { useState } from "react";
import { View, Text } from "react-native";
import { Switch } from "react-native-switch";
import { styles } from "./OptionSwitcher.styles";

export const Switcher = ({ initialValue = false, onToggle }) => {
    const [isEnabled, setIsEnabled] = useState(initialValue);

    const toggleSwitch = (value) => {
        setIsEnabled(value);
        if (onToggle) {
            onToggle(value);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{isEnabled ? "ON" : "OFF"}</Text>
            <Switch
                value={isEnabled}
                onValueChange={toggleSwitch}
                disabled={false}
                activeText={"On"}
                inActiveText={"Off"}
                backgroundActive={"green"}
                backgroundInactive={"gray"}
                circleActiveColor={"#30a566"}
                circleInActiveColor={"#d3d3d3"}
                circleSize={30}
                barHeight={20}
                switchLeftPx={2.5}
                switchRightPx={2.5}
                switchWidthMultiplier={2}
            />
        </View>
    );
};
