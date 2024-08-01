import { TextInput, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { CustomButton, CustomTextInput } from '@shared/ui/index';
import { styles } from './ControlledInput.style';
import { CustomInput } from '@shared/ui/Components/Test/test';

export const ControlledInput = () => {
    const image = require('@shared/ui/assets/images/loupe.png');
    const [value, setValue] = useState<string>();

    const handleSearch = () => {
    };

    return (
        <View style={styles.controlledInBox}>
            <CustomInput value={value} onChangeText={setValue} boxStyle={styles.inputBoxStyle} style={styles.inputStyles} />
            <CustomButton imgPath={image} onPress={handleSearch} style={styles.btnStyle} />
        </View>
    )
};

