import { View, Text } from 'react-native';
import React from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView {...props}>
            <View>
                <Text>Menu</Text>
                <DrawerItem
                    label="Auth"
                    onPress={() => props.navigation.navigate('AuthScreen')}
                />
            </View>
        </DrawerContentScrollView>
    );
};

export default CustomDrawerContent;