import React, { useEffect, useState } from "react";
import { CustomButton } from "@shared/ui";
import { styles } from "./CurrentLocationBtn.styles";
import { watchLocation } from "@shared/lib";
import { location, Nullable } from "@shared/api";
import { useSetlocationStore } from "@entities/user";
import { ImageSourcePropType } from "react-native";

const currentLocationImg = require("@shared/ui/assets/images/location.png");
const noCurrentLocationImg = require("@shared/ui/assets/images/no-location.png");

export const CurrentLocationBtn = () => {
    const [currentLocation, setCurrentLocation] = useState<Nullable<location>>(null);
    const [image, setImage] = useState<ImageSourcePropType>(currentLocationImg);
    const [triger, setTriger] = useState<boolean>(false);
    const { setLocation, setCurrentLocation: setCurrentLoc } = useSetlocationStore();

    const handleGetCurrentLocation = async () => {
        setTriger(!triger);
        if (currentLocation) {
            setLocation(currentLocation);
            setCurrentLoc(currentLocation);
        }
    };

    useEffect(() => {
        const unsubscribe = watchLocation((loc: Nullable<location>) => {
            if (loc) {
                setCurrentLocation(loc);
                setImage(currentLocationImg);
            } else {
                setCurrentLocation(null);
                setImage(noCurrentLocationImg);
            }
        });

        return () => {
            unsubscribe();
        };
    }, [triger]);

    return <CustomButton onPress={handleGetCurrentLocation} style={styles.btnStyles} imgPath={image} />;
};
