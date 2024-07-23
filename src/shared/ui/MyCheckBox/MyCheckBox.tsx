import { TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from './MyCheckBox.style';
import MyImage from '../MyImage/MyImage';

interface IMyCheckBox {
    checkedStatus: boolean;
    onChange: (value: boolean) => void;
}; 

const MyCheckBox: React.FC<IMyCheckBox> = ({ checkedStatus, onChange }) => {
    const [isChecked, setIsChecked] = useState<boolean>(checkedStatus);
    const checkedImg = require('../../assets/images/checkMark.png');

    const toggleCheckbox = () => {
        const newCheckedState = !isChecked;
        setIsChecked(newCheckedState);
        onChange(newCheckedState);
    };

    return (
        <TouchableOpacity onPress={toggleCheckbox} style={styles.checkbox}>
            {isChecked && <MyImage path={checkedImg} />}
        </TouchableOpacity>
    )
}

export default MyCheckBox;