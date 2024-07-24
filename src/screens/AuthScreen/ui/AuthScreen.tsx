import { View, Text, Button } from 'react-native';
import React from 'react';
import { styles } from './AuthScreen.styles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../shared/types/routesType';

const AuthScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View>
            <Text>AuthScreen</Text>
            <Button title='onMainPage' onPress={() => navigation.navigate('DrawerNavigator')} />
        </View>
    )
}

export default AuthScreen;