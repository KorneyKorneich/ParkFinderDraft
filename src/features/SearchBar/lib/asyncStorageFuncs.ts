import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (value: string) => {
    const data = await AsyncStorage.getItem("hints");
    if (data) {
        const previousValue = JSON.parse(data) as string[];
        const isValueExist = previousValue.find((elem) => value === elem);
        if (isValueExist) return;
        await AsyncStorage.setItem("hints", JSON.stringify([value, ...previousValue.slice(0, 2)]));
    } else {
        await AsyncStorage.setItem("hints", JSON.stringify([value]));
    }
};

export const getData = async () => {
    const data = await AsyncStorage.getItem("hints");
    if (data) {
        const parseData = JSON.parse(data);
        return parseData;
    }
    return null;
};
