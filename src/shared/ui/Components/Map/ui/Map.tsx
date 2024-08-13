import React from "react";
import { YaMap } from "react-native-yamap";
import { styles } from "./Map.styles";

export const Map = () => {
    YaMap.init(process.env.REACT_NATIVE_APP_YANDEX_MAP_API_KEY as string);

    return <YaMap style={styles.map}></YaMap>;
};
