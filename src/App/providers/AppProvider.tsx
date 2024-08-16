import React, { createContext } from "react";
import { YaMap, Geocoder } from "react-native-yamap";

export const AppContext = createContext(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    YaMap.init(process.env.REACT_NATIVE_APP_YANDEX_MAP_API_KEY as string);
    Geocoder.init(process.env.REACT_NATIVE_APP_GEOCODER_API_KEY as string);

    return <AppContext.Provider value={null}>{children}</AppContext.Provider>;
};
