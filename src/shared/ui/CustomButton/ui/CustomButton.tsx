import { GestureResponderEvent, ImageSourcePropType, StyleProp, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import { styles } from './CustomButton.styles';
import React from 'react';
import { CustomImage } from '@shared/ui/CustomImage/ui/CustomImage';

interface ICustomButton extends TouchableOpacityProps {
    title?: string;
    style?: StyleProp<ViewStyle>;
    onPress?: (event: GestureResponderEvent) => void;
    textStyle?: StyleProp<TextStyle>;
    imgPath?: ImageSourcePropType;
}

export const CustomButton: React.FC<ICustomButton> = ({ title, style, imgPath, textStyle, onPress, ...props }) => {
    return (
        <TouchableOpacity onPress={onPress} {...props} activeOpacity={0.8} style={[styles.btnArea, style]}>
            {title
                ? <Text style={[styles.title, textStyle]}>{title}</Text>
                : imgPath && <CustomImage path={imgPath}/>
            }
        </TouchableOpacity>
    )
};
