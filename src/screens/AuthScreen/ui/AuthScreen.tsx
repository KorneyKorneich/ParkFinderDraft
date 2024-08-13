import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { AuthorizedStackParamList } from "@shared/api";

const AuthScreen = () => {
    const navigation = useNavigation<NavigationProp<AuthorizedStackParamList>>();

    return (
        <View>
            <Text>AuthScreen</Text>
            <Button title="onMainPage" onPress={() => navigation.navigate("DrawerNavigator")} />
        </View>
    );
};

export default AuthScreen;
