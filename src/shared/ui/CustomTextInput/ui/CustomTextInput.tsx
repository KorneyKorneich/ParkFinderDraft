import { StyleProp, TextInput, TextInputProps, View, ViewStyle } from 'react-native';
import React from 'react';
import { styles } from './CustomTextInput.style';

interface ICustomTextInput extends TextInputProps {
    boxStyle?: StyleProp<ViewStyle>,
}

export const CustomTextInput: React.FC<ICustomTextInput> = ({ style, boxStyle, ...props }) => {
    return (
        <View style={[styles.inputBox, boxStyle]}>
            <TextInput {...props} style={[styles.input, style]} />
        </View>
    );
};