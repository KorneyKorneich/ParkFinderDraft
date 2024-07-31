import { TextInput, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { CustomButton, CustomTextInput } from '@shared/index';
import { styles } from './ControlledInput.style';

export const ControlledInput = () => {
    const image = require('@shared/assets/images/loupe.png');
    const [value, setValue] = useState<string>();

    const handleSearch = () => {
    };

    return (
        <View style={styles.controlledInBox}>
            <CustomTextInput value={value} onChangeText={setValue} boxStyle={styles.inputBoxStyle} style={styles.inputStyles} />
            <CustomButton imgPath={image} onPress={handleSearch} style={styles.btnStyle} />
        </View>
    )
};

