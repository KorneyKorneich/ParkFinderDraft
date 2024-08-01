import React, { useEffect, useState } from "react";
import {
	Image,
	SafeAreaView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import styles from "./PhoneAuthScreen.styles";
import { CustomButton, DownArrow, PhoneNumberAuthIllustration, StyleGuide } from "@shared/ui";
import { Nullable, UnauthorizedStackRoutesProps } from "@shared/api";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useUserStore } from "@entities/user";
import { CountryPickModal } from "@widgets/CountryPickModal";
import { Country, useCountryStore } from "@entities/country";

export const PhoneAuthScreen = ({navigation}: UnauthorizedStackRoutesProps) => {

	const getCountries = useCountryStore(state => state.fetchCountries);
	const countries = useCountryStore(state => state.countries);
	const defaultCountry = useCountryStore(state => state.defaultData);
	const phoneAuth = useUserStore(state => state.phoneSignIn);

	const [phone, setPhone] = useState("");
	const [selectedCountry, setSelectedCountry] = useState<Nullable<Country>>(null);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [confirmation, setConfirmation] = useState<FirebaseAuthTypes.ConfirmationResult>();

	function handleModalClose() {
		setIsModalVisible(false);
	}

	function handleModalOpen() {
		setIsModalVisible(true);
	}

	async function handlePhoneVerify() {
		try {
			if(selectedCountry){
				const confirm = await phoneAuth({selectedCountry: selectedCountry, phone: phone});
				setConfirmation(confirm);
			}
			navigation.navigate( "OTPVerifyScreen", { confirmation: confirmation } );
		}catch (e){
			//todo: add error handler
		}
	}

	function handleCountryPick(item: Country) {
		setSelectedCountry(item);
		setIsModalVisible(false);
	}

	useEffect(() => {
		getCountries().then(() => {
			setSelectedCountry(defaultCountry);
		});
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.img}>
				<PhoneNumberAuthIllustration width={"200"} height={"200"} />
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.title}>Enter your phone number</Text>
				<Text style={styles.text}>We will send you verification code</Text>
			</View>
			<View style={styles.inputContainer}>
				<TouchableOpacity onPress={handleModalOpen} style={styles.selectCountryContainer}>
					<View style={{ justifyContent: "center" }}>
						<DownArrow width={10} height={10} />
					</View>

					<View>
						<Image style={{ width: 40, height: 25 }} source={{ uri: selectedCountry?.flag }} />
					</View>
					<View>
						<Text>{selectedCountry?.callingCode}</Text>
					</View>
				</TouchableOpacity>
				<View>
					<TextInput style={styles.phoneInput} value={phone} onChangeText={number => setPhone(number)} placeholder={"Enter your phone number"} />
				</View>
			</View>
			<CustomButton title={"Verify"} id={"recaptcha-container"} onPress={handlePhoneVerify} color={StyleGuide.PRIMARY} />
			{countries && <CountryPickModal isModalVisible={isModalVisible} handleModalClose={handleModalClose} handleCountryPick={handleCountryPick} countries={countries}/>}
		</SafeAreaView>
	);
};
