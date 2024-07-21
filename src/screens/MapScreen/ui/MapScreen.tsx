import { View, Text, Button } from 'react-native';
import React from 'react';
import {styles} from './MapScreen.styles'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../App/navigation/types/routesType';

const MapScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <View>
            <Text>MapScreen</Text>
            <Button title='watch park list' onPress={() => navigation.navigate('ParkListScreen')}/>
        </View>
    )
}

export default MapScreen;