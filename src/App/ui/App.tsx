import React, { useEffect } from "react";
import Navigation from "../navigation/Navigation";
import { requestLocationPermission } from "../model/services/requestLocationPermission";
import { useSetlocationStore } from "@entities/user";
import { AppProvider } from "../providers/AppProvider";

function App(): React.JSX.Element {
    const { setLocation, setCurrentLocation } = useSetlocationStore();

    useEffect(() => {
        requestLocationPermission(setLocation, setCurrentLocation);
    }, []);

    return (
        <AppProvider>
            <Navigation />
        </AppProvider>
    );
}

export default App;
