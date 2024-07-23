import { TextInput, TextInputProps, View } from 'react-native';
import React from 'react';
import { styles } from './MyTextInput.style';

export interface IMyTextInput extends TextInputProps {

};

const MyTextInput: React.FC<IMyTextInput> = ({ style, ...props }) => {
    return (
        <View style={styles.inputBox}>
            <TextInput {...props} style={[styles.input, style]} />
        </View>
    )
}

export default MyTextInput;

