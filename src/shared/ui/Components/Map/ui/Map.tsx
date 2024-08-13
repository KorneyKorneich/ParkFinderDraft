import React, { useRef } from "react";
import { YaMap, YaMapProps } from "react-native-yamap";
import { styles } from "./Map.styles";

interface MapProps extends YaMapProps {
	children?: React.ReactNode;
}

export const Map = (props: MapProps) => {
	YaMap.init(process.env.REACT_NATIVE_APP_YANDEX_MAP_API_KEY as string);

	const map = useRef<YaMap>(null);

	return (
		<YaMap ref={map} {...props} style={styles.map}>
			{props.children}
		</YaMap>
	);
};
