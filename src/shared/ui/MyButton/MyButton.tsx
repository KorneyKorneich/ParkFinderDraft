import { GestureResponderEvent, StyleProp, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import { styles } from './MyButtom.styles';
import React from 'react';

interface IMyButton extends TouchableOpacityProps {
    title: string;
    style?: StyleProp<ViewStyle>;
    onPress?: (event: GestureResponderEvent) => void;
    textStyle?: StyleProp<TextStyle>;
}

const MyButton: React.FC<IMyButton> = ({ title, style, textStyle, onPress, ...props }) => {
    return (
        <TouchableOpacity onPress={onPress} {...props} activeOpacity={0.8} style={[styles.btnArea, style]}>
            <Text style={[styles.title, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default MyButton;

