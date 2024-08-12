import { locationArr, ParkingSchema } from "@shared/api";

interface SetMarkers {
    (markers: ParkingSchema[]): void;
}

export const loadMarkers = async (setMarkers: SetMarkers) => {
    const data = (await fetchMarkers()) as ParkingSchema[];
    setMarkers(data);
};

const fetchMarkers = async () => {
    return new Promise((resolve) => {
        resolve(locationArr);
    });
};
