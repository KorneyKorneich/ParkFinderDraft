import { View, Text, SafeAreaView, Dimensions } from 'react-native';
import React from 'react';
import { YaMap, Marker } from 'react-native-yamap';
import { styles } from './Map.styles';

YaMap.init('d2e70461-6197-4d29-9e81-2e3f21a44678');


const Map = () => {
    return (
            <YaMap
                style={styles.map}
            >

            </YaMap>
    )
}

export default Map;