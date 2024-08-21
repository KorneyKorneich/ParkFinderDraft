import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthorizedStackParamList } from "@shared/api";

export const ParkListScreen = () => {
    const navigation = useNavigation<NavigationProp<AuthorizedStackParamList>>();

    return (
        <View>
            <Text>ParkListScreen</Text>
            <Button title="to main" onPress={navigation.goBack} />
        </View>
    );
};
