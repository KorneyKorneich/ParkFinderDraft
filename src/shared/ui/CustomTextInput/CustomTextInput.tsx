import { TextInput, TextInputProps, View } from 'react-native';
import React from 'react';
import { styles } from './CustomTextInput.style';

export interface ICustomTextInput extends TextInputProps {

};

const CustomTextInput: React.FC<ICustomTextInput> = ({ style, ...props }) => {
    return (
        <View style={styles.inputBox}>
            <TextInput {...props} style={[styles.input, style]} />
        </View>
    )
}

export default CustomTextInput;

