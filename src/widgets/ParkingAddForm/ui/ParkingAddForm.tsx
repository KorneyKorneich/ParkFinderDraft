import styles from "./ParkingAddForm.styles.ts";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { CustomButton, CustomInput, StyleGuide, FormSwitcher, OptionSwitcher } from "@shared/ui";
import React, { useContext, useState } from "react";
import { Geocoder, Point } from "react-native-yamap";
import { sendParkingSpotInfo } from "../api/funcs.ts";
import { SpotPickingMap } from "@widgets/SpotPickingMap";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { AuthorizedNavigationProps, ParkingSchemaAddition, WebLinks } from "@shared/api";
import { AppContext } from "@entities/AppContext";

interface AdditionalOptionsType {
    isPaid: boolean;
    isCharge: boolean;
    isPlaceForDisabled: boolean;
}

interface ParkingAddFormSchema {
    parkingName: string;
    description: string;
    address: string;
    coordinates?: { lat: number; lng: number };
}

export type SuggestResponse = {
    results: SuggestResult[];
};

export type SuggestResult = {
    title: Title;
    subtitle: Subtitle;
    tags: string[];
    distance: Distance;
    address: Address;
    uri: string;
};

export type Title = {
    text: string;
    hl: Highlight[];
};

export type Highlight = {
    begin: number;
    end: number;
};

export type Subtitle = {
    text: string;
};

export type Distance = {
    text: string;
    value: number;
};

export type Address = {
    formatted_address: string;
    component: AddressComponent[];
};

export type AddressComponent = {
    name: string;
    kind: AddressComponentKind[];
};

export type AddressComponentKind = "COUNTRY" | "PROVINCE" | "LOCALITY" | "STREET" | "HOUSE";

export const ParkingAddForm = () => {
    const { navigate } = useNavigation<AuthorizedNavigationProps<"AddParkScreen">>();
    const [isAddress, setIsAddress] = useState<boolean>(true);
    const { control, setValue, handleSubmit, reset } = useForm<ParkingAddFormSchema>();
    const [additionalOptions, setAdditionalOptions] = useState<AdditionalOptionsType>({
        isPaid: false,
        isCharge: false,
        isPlaceForDisabled: false,
    });
    const [isMapVisible, setIsMapVisible] = useState(false);
    const [marker, setMarker] = useState<Point>();
    const [isLoading, setIsLoading] = useState(false);
    const handleToggleOption = (option: keyof AdditionalOptionsType) => {
        setAdditionalOptions((prev) => ({ ...prev, [option]: !prev[option] }));
    };

    const { setTrigger } = useContext(AppContext);

    const handleSpotAdding: SubmitHandler<ParkingAddFormSchema> = async (data) => {
        setIsLoading(true);
        if (marker) {
            const parkingSpotData: ParkingSchemaAddition = {
                location: marker,
                approvedStatus: true,
                parkingInf: {
                    parkingName: data.parkingName,
                    workingHours: null,
                    rating: null,
                    comment: data.description || null,
                    charging: additionalOptions.isCharge,
                    paid: additionalOptions.isPaid,
                    handicap: additionalOptions.isPlaceForDisabled,
                },
            };
            await sendParkingSpotInfo(parkingSpotData);
            setIsLoading(false);
            navigate("MapScreen");
            setTrigger(true);
            reset();
        }
    };

    const setAddress = (address: string, coordinates: Point) => {
        setValue("address", address);
        setValue("coordinates.lat", coordinates.lat);
        setValue("coordinates.lng", coordinates.lon);
    };

    const handleOnSwitchCoordinatesPress = () => setIsAddress(false);
    const handleOnSwitchAddressPress = () => setIsAddress(true);

    const handleMapOpen = () => {
        setIsMapVisible(true);
    };

    const handleMapClose = () => {
        setIsMapVisible(false);
    };

    const [suggestions, setSuggestions] = useState<SuggestResult[] | null>(null);
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [fetchDelay, setFetchDelay] = useState<NodeJS.Timeout | null>(null);

    const fetchSuggestions = async (text: string) => {
        setIsFetching(true);
        try {
            const response = await axios.get<SuggestResponse>(WebLinks.SUGGEST_API, {
                params: {
                    apikey: process.env.REACT_NATIVE_APP_GEOSADGEST_API_KEY,
                    text: text,
                    lang: "ru",
                    results: "5",
                    types: "country,street,house",
                    print_address: 1,
                },
            });
            if (response.data && response.data.results) {
                setSuggestions(response.data.results);
            } else {
                setSuggestions([]);
            }
        } finally {
            setIsFetching(false);
        }
    };

    const handleInputChange = (text: string, onChange: (value: string) => void) => {
        onChange(text);

        if (fetchDelay) {
            clearTimeout(fetchDelay);
        }

        if (text.length > 0) {
            const delay = setTimeout(() => {
                fetchSuggestions(text);
            }, 500);

            setFetchDelay(delay);
        } else {
            setSuggestions(null);
        }
    };

    const getPoint = async (value: string) => {
        const result = await Geocoder.addressToGeo(value);
        if (result) {
            setMarker(result);
            setValue("coordinates.lat", result.lat);
            setValue("coordinates.lng", result.lon);
        }
    };

    return (
        <>
            <ScrollView style={styles.formContainer}>
                <Text style={styles.formName}>Add Parking Place</Text>
                <Controller
                    control={control}
                    name="parkingName"
                    render={({ field: { value, onChange } }) => (
                        <CustomInput
                            titleStyle={styles.parkingNameTitle}
                            inputStyles={styles.input}
                            value={value}
                            onChangeText={onChange}
                            placeholder={"Enter the parking spot name"}
                        />
                    )}
                />
                <View style={styles.parkingSpotDescription}>
                    <Controller
                        control={control}
                        name="description"
                        render={({ field: { value, onChange } }) => (
                            <CustomInput
                                inputStyles={[styles.input, styles.descriptionInput]}
                                value={value}
                                multiline={true}
                                numberOfLines={2}
                                onChangeText={onChange}
                                placeholder={"Tell everyone something about this spot"}
                            />
                        )}
                    />
                </View>
                <FormSwitcher
                    optionToggle={isAddress}
                    firstOptionTitle={"Address"}
                    secondOptionTitle={"Coordinates"}
                    handleOnFirstOptionPress={handleOnSwitchAddressPress}
                    handleOnSecondOptionPress={handleOnSwitchCoordinatesPress}
                />
                {isAddress ? (
                    <>
                        <Controller
                            control={control}
                            name="address"
                            render={({ field: { value, onChange } }) => (
                                <CustomInput
                                    inputStyles={styles.input}
                                    value={value}
                                    onChangeText={(text) => handleInputChange(text, onChange)}
                                    placeholder={"Enter the parking space address"}
                                />
                            )}
                        />
                        {isFetching && <Text>Loading suggestions...</Text>}
                        {suggestions && (
                            <FlatList
                                style={styles.suggestionList}
                                data={suggestions || []}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => (
                                    <Text
                                        style={styles.suggestion}
                                        onPress={() => {
                                            getPoint(`${item.subtitle.text} ${item.title.text}`);
                                            setValue("address", `${item.subtitle.text} ${item.title.text}`);
                                            setSuggestions(null);
                                        }}>
                                        {item.subtitle && item.subtitle.text + " "}
                                        {item.title && item.title.text}
                                    </Text>
                                )}
                            />
                        )}
                    </>
                ) : (
                    <View style={styles.coordinatesInputContainer}>
                        <View style={styles.coordinatesInput}>
                            <Controller
                                control={control}
                                name="coordinates.lat"
                                render={({ field: { value, onChange } }) => (
                                    <CustomInput
                                        value={value?.toString()}
                                        onChangeText={onChange}
                                        placeholder={"Enter latitude"}
                                        titleStyle={styles.parkingNameTitle}
                                        inputStyles={styles.input}
                                    />
                                )}
                            />
                        </View>
                        <View style={styles.coordinatesInput}>
                            <Controller
                                control={control}
                                name="coordinates.lng"
                                render={({ field: { value, onChange } }) => (
                                    <CustomInput
                                        value={value?.toString()}
                                        onChangeText={onChange}
                                        placeholder={"Enter longitude"}
                                        titleStyle={styles.parkingNameTitle}
                                        inputStyles={styles.input}
                                    />
                                )}
                            />
                        </View>
                    </View>
                )}
                <CustomButton
                    title={"Pick point on map"}
                    color={StyleGuide.LIGHT_GREY}
                    textStyle={styles.buttonTextStyle}
                    onPress={handleMapOpen}
                />
                <Text style={styles.additionalTitle}>Additional options:</Text>
                <View style={styles.additionalOptions}>
                    <View style={styles.additionalOption}>
                        <Text style={styles.additionalOptionText}>Paid</Text>
                        <View style={styles.switcher}>
                            <OptionSwitcher
                                onSwitcherChange={() => handleToggleOption("isPaid")}
                                isSelected={additionalOptions.isPaid}
                            />
                        </View>
                    </View>
                    <View style={styles.additionalOption}>
                        <Text style={styles.additionalOptionText}>Charge</Text>
                        <View style={styles.switcher}>
                            <OptionSwitcher
                                onSwitcherChange={() => handleToggleOption("isCharge")}
                                isSelected={additionalOptions.isCharge}
                            />
                        </View>
                    </View>
                    <View style={styles.additionalOption}>
                        <Text style={styles.additionalOptionText}>Reserved for disabled</Text>
                        <View style={styles.switcher}>
                            <OptionSwitcher
                                onSwitcherChange={() => handleToggleOption("isPlaceForDisabled")}
                                isSelected={additionalOptions.isPlaceForDisabled}
                            />
                        </View>
                    </View>
                </View>
                {isLoading ? (
                    <ActivityIndicator size="large" color={StyleGuide.GREEN} />
                ) : (
                    <CustomButton
                        title={"Add spot"}
                        onPress={handleSubmit(async (data) => {
                            await handleSpotAdding(data);
                        })}
                        color={StyleGuide.GREEN}
                    />
                )}
            </ScrollView>
            {isMapVisible && (
                <SpotPickingMap
                    setIsModalOpen={setIsMapVisible}
                    setMarker={setMarker}
                    setAddress={setAddress}
                    handleModalClose={handleMapClose}
                    isModalVisible={isMapVisible}
                />
            )}
        </>
    );
};
