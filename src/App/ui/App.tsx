import React, { useEffect } from "react";
import Navigation from "../navigation/Navigation";
import { requestLocationPermission } from "../model/services/requestLocationPermission";
import { useSetlocationStore } from "@entities/user";
import { YaMap, Geocoder } from "react-native-yamap";

function App(): React.JSX.Element {
    const { setLocation } = useSetlocationStore();

    YaMap.init("e3aa0fd7-1107-4862-880b-4b79a4f6c93a");
    Geocoder.init("d2e70461-6197-4d29-9e81-2e3f21a44678");

    useEffect(() => {
        requestLocationPermission(setLocation);
    }, []);

    return <Navigation />;
}

export default App;
