import React from "react";
import { StyleProp, Text, TextInput, TextInputProps, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { styles } from "./CustomInput.styles.ts";
import { Eye, StyleGuide } from "@shared/ui";

interface CustomInputProps extends TextInputProps {
    title?: string;
    isPassword?: boolean;
    boxStyle?: StyleProp<ViewStyle>;
    inputStyles?: StyleProp<ViewStyle>;
    titleStyle?: StyleProp<TextStyle>;
    value: string;
    incorrectValue?: boolean;
    passwordVisible?: boolean;
    togglePasswordVisible?: () => void;
}

export const CustomInput: React.FC<CustomInputProps> = ({
    title,
    isPassword,
    boxStyle,
    value,
    incorrectValue,
    passwordVisible,
    togglePasswordVisible,
    inputStyles,
    titleStyle,
    ...rest
}) => {
    return (
        <View style={[styles.inputBox, boxStyle]}>
            <View style={styles.container}>
                {title && <Text style={[styles.title, titleStyle, incorrectValue ? styles.error : null]}>{title}</Text>}
                <View style={[styles.inputContainer, inputStyles, incorrectValue ? styles.error : null]}>
                    <TextInput
                        autoCapitalize={"none"}
                        secureTextEntry={isPassword && !passwordVisible}
                        style={styles.input}
                        value={value}
                        {...rest}
                    />
                    {isPassword && (
                        <TouchableOpacity onPress={togglePasswordVisible} style={styles.eyeIcon}>
                            <Eye fill={passwordVisible ? StyleGuide.GREEN : StyleGuide.BLACK} />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </View>
    );
};
