import { AppContext } from "@entities/AppContext";
import { useParkingsStore } from "@entities/parkings";
import { getParkingsData } from "@screens/MapScreen/api/getParkingsData";
import React, { useEffect, useState } from "react";
import { YaMap, Geocoder } from "react-native-yamap";

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [trigger, setTrigger] = useState<boolean>(false);

    const { setParkingsMarkers } = useParkingsStore();

    YaMap.init(process.env.REACT_NATIVE_APP_YANDEX_MAP_API_KEY as string);
    Geocoder.init(process.env.REACT_NATIVE_APP_GEOCODER_API_KEY as string);

    useEffect(() => {
        setTrigger(false);
        const unsubscribe = getParkingsData(setParkingsMarkers);

        return () => unsubscribe();
    }, [trigger]);

    return <AppContext.Provider value={{ trigger, setTrigger }}>{children}</AppContext.Provider>;
};
