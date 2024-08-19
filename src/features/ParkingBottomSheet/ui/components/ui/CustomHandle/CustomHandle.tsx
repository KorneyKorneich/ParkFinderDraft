import { View } from "react-native";
import { styles } from "./CustomHandle.styles";

export const CustomHandle = () => (
    <View style={styles.customHandle}>
        <View style={styles.customHandleIndicator} />
    </View>
);