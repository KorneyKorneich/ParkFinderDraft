/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./src/App/ui/App";
import { name as appName } from "./app.json";

import { Geocoder, YaMap } from "react-native-yamap";

YaMap.init(process.env.REACT_NATIVE_APP_YANDEX_MAP_API_KEY);
Geocoder.init(process.env.REACT_NATIVE_APP_GEOCODER_API_KEY);

AppRegistry.registerComponent(appName, () => App);
