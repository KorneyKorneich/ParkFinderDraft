import { Image, Modal, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from "./PhoneAuthScreen.styles.ts";
import { CustomInput, DownArrow, PhoneNumberAuthIllustration } from "@shared/ui";
import { useEffect, useState } from "react";
import { useCountryStore } from "@screens/PhoneAuthScreen/model/countryStore.ts";
import { Country } from "@screens/PhoneAuthScreen/types/types.ts";
import { Nullable } from "@shared/api";


interface PhoneAuthScreenProps {
}


export const PhoneAuthScreen = (props: PhoneAuthScreenProps) => {
	const {} = props;

	const getCountries = useCountryStore(state => state.fetchCountries);
	const countries = useCountryStore(state => state.countries);
	const defaultCountry = useCountryStore(state => state.defaultData);

	const [phone, setPhone] = useState("");
	const [selectedCountry, setSelectedCountry] = useState<Nullable<Country>>(null);
	const [isModalVisible, setIsModalVisible] = useState(false);

	useEffect(() => {
		getCountries();
		setSelectedCountry(defaultCountry);
	}, []);

	//Todo: decompose
	const renderCountries = ()  => {
		return (
			<Modal>

			</Modal>
		);
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.img}>
				<PhoneNumberAuthIllustration width={"200"} height={"200"}/>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.title}>Enter your phone number</Text>
				<Text style={styles.text}>We will send you verification code</Text>
			</View>

			<View style={styles.inputContainer}>
				<TouchableOpacity style={styles.selectCountryContainer}>
					<View style={{justifyContent: "center"}}>
						<DownArrow width={15} height={15}/>
					</View>

					<View style={styles.flag}>
						{/*<Image src={}/>*/}
					</View>
					<View style={styles.countryCode}>
						<Text />
					</View>

					<View style={styles.numberInput}>
						<CustomInput value={phone} setValue={setPhone} placeholder={"Enter your phone number"} />
					</View>
				</TouchableOpacity>
			</View>

			<View></View>
		</SafeAreaView>
	);
};
