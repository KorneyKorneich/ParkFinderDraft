import React from "react";
import { StyleProp, Text, TextInput, TextInputProps, TextStyle, View, ViewStyle } from "react-native";
import { styles } from "./CustomInput.styles.ts";

interface CustomInputProps extends TextInputProps {
    title?: string;
    titleStyle?: StyleProp<TextStyle>;
    isPassword?: boolean;
    boxStyle?: StyleProp<ViewStyle>;
}

export const CustomInput: React.FC<CustomInputProps> = ({
    title,
    isPassword,
    style,
    boxStyle,
    titleStyle,
    ...rest
}) => {
    return (
        <View style={[styles.inputBox, boxStyle]}>
            <View style={styles.container}>
                {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
                <TextInput
                    autoCapitalize={"none"}
                    secureTextEntry={isPassword}
                    style={[styles.input, style]}
                    {...rest}
                />
            </View>
        </View>
    );
};
