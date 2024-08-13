import React, { useEffect } from "react";
import Navigation from "../navigation/Navigation";
import { requestLocationPermission } from "../model/services/requestLocationPermission";
import { useSetCurretLocationStore } from "@entities/user";

function App(): React.JSX.Element {
    const { setCurrentLocation } = useSetCurretLocationStore();

    useEffect(() => {
        requestLocationPermission(setCurrentLocation);
    }, []);

    return <Navigation />;
}

export default App;
