import React, { createContext } from "react";
import { YaMap, Geocoder } from "react-native-yamap";

export const AppContext = createContext(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    YaMap.init("e3aa0fd7-1107-4862-880b-4b79a4f6c93a");
    Geocoder.init("d2e70461-6197-4d29-9e81-2e3f21a44678");

    return <AppContext.Provider value={null}>{children}</AppContext.Provider>;
};
