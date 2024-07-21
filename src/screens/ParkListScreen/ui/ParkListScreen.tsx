import { View, Text, Button } from 'react-native';
import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../App/navigation/types/routesType';

const ParkListScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    
    return (
        <View>
            <Text>ParkListScreen</Text>
            <Button title='to main' onPress={() => navigation.goBack()}/>
        </View>
    )
}

export default ParkListScreen;