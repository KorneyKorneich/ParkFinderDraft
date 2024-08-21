import { useParkingsStore } from "@entities/parkings";
import { getParkingsData } from "@screens/MapScreen/api/getParkingsData";
import React, { createContext, useEffect } from "react";
import { YaMap, Geocoder } from "react-native-yamap";

export const AppContext = createContext(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { setParkingsMarkers } = useParkingsStore();

    YaMap.init(process.env.REACT_NATIVE_APP_YANDEX_MAP_API_KEY as string);
    Geocoder.init(process.env.REACT_NATIVE_APP_GEOCODER_API_KEY as string);

    useEffect(() => {
        const unsubscribe = getParkingsData(setParkingsMarkers);

        return () => unsubscribe();
    }, []);

    return <AppContext.Provider value={null}>{children}</AppContext.Provider>;
};
