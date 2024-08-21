import React, { useState } from "react";
import { CustomButton } from "@shared/ui";
import { styles } from "./CurrentLocationBtn.styles";
import { getLocation } from "@shared/lib";
import { location } from "@shared/api";
import { useSetlocationStore } from "@entities/user";
import { ImageSourcePropType } from "react-native";

const currentLocationImg = require("@shared/ui/assets/images/location.png");
const noCurrentLocationImg = require("@shared/ui/assets/images/no-location.png");

export const CurrentLocationBtn = () => {
    const [image, setImage] = useState<ImageSourcePropType>(currentLocationImg);
    const { setLocation, setCurrentLocation } = useSetlocationStore();

    const handleGetCurrentLocation = async () => {
        const currentLocation = (await getLocation()) as location;

        if (currentLocation) {
            setLocation(currentLocation);
            setCurrentLocation(currentLocation);
            setImage(currentLocationImg);
        } else {
            setImage(noCurrentLocationImg);
        }
    };

    return <CustomButton onPress={handleGetCurrentLocation} style={styles.btnStyles} imgPath={image} />;
};
