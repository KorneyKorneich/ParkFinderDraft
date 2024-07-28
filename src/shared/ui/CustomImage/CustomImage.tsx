import { Image, StyleProp, ImageStyle, ImageSourcePropType, ImageProps } from 'react-native';
import React from 'react';
import { styles } from './CustomImage.styles';

interface ICustomImage extends ImageProps {
    path: ImageSourcePropType;
    style?: StyleProp<ImageStyle>
};

const CustomImage: React.FC<ICustomImage> = ({ path, style, ...props }) => {
    return (
        <Image {...props} style={[styles.checkedImg, style]} source={path} />
    )
}

export default CustomImage;