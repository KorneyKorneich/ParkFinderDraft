import React, { useEffect } from "react";
import Navigation from "../navigation/Navigation";
import { requestLocationPermission } from "../model/services/requestLocationPermission";
import { useSetlocationStore } from "@entities/user";
import { AppProvider } from "../providers/AppProvider";

function App(): React.JSX.Element {
    const { setLocation } = useSetlocationStore();

    useEffect(() => {
        requestLocationPermission(setLocation);
    }, []);

    return (
        <AppProvider>
            <Navigation />
        </AppProvider>
    );
}

export default App;
