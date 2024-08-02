import React from 'react';
import { GestureResponderEvent, ImageSourcePropType, StyleProp, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import { styles } from './CustomButton.styles';
import { CustomImage } from '@shared/ui';

interface ICustomButton extends TouchableOpacityProps {
    title?: string;
    style?: StyleProp<ViewStyle>;
    onPress?: (event: GestureResponderEvent) => void;
    textStyle?: StyleProp<TextStyle>;
    imgPath?: ImageSourcePropType;
    color?: string;
}

export const CustomButton: React.FC<ICustomButton> = ({ title, style, imgPath, textStyle, onPress, color, ...props }) => {
    return (
        <TouchableOpacity onPress={onPress} {...props} activeOpacity={0.8}
            style={[styles.btnArea, styles.customButtonContainer, { backgroundColor: color }, style]}>
            {title
                ? <Text style={[styles.title, textStyle]}>{title}</Text>
                : imgPath && <CustomImage path={imgPath} />}
        </TouchableOpacity>
    );
};
