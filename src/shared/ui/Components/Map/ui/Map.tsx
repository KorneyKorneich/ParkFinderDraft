import React from "react";
import { YaMap } from "react-native-yamap";
import { styles } from "./Map.styles";

export const Map = () => {
	return <YaMap style={styles.map}></YaMap>;
};
