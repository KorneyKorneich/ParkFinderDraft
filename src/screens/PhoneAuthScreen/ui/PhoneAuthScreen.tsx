import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./PhoneAuthScreen.styles";
import { CustomButton, DownArrow, PhoneNumberAuthIllustration, StyleGuide } from "@shared/ui";
import { Nullable, UnauthorizedStackRoutesProps } from "@shared/api";
import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useUserStore } from "@entities/user";
import { CountryPickModal } from "@widgets/CountryPickModal";
import { Country, useCountryStore } from "@entities/country";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface PhoneForm {
	phone: string;
}

export const PhoneAuthScreen = ({ navigation }: UnauthorizedStackRoutesProps) => {
	const {
		handleSubmit,
		control,
		formState: { errors },
		setError,
	} = useForm<PhoneForm>();

	const getCountries = useCountryStore((state) => state.fetchCountries);
	const countries = useCountryStore((state) => state.countries);
	const defaultCountry = useCountryStore((state) => state.defaultData);
	const phoneAuth = useUserStore((state) => state.phoneSignIn);

	const [selectedCountry, setSelectedCountry] = useState<Nullable<Country>>(null);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [confirmation, setConfirmation] = useState<FirebaseAuthTypes.ConfirmationResult>();

	function handleModalClose() {
		setIsModalVisible(false);
	}

	function handleModalOpen() {
		setIsModalVisible(true);
	}

	const handlePhoneVerify: SubmitHandler<PhoneForm> = async (data) => {
		try {
			if (selectedCountry) {
				const confirm = await phoneAuth({ selectedCountry: selectedCountry, phone: data.phone });
				setConfirmation(confirm);
			}
			navigation.navigate("OTPVerifyScreen", { confirmation: confirmation });
		} catch (e) {
			//todo: add error handler
		}
	};

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
			<View style={[styles.inputContainer, errors.phone && styles.errorInput]}>
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
				<Controller
					name={"phone"}
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							style={styles.phoneInput}
							value={value}
							onChangeText={onChange}
							onBlur={onBlur}
							placeholder={"Enter your phone number"}
						/>
					)}
					rules={{
						required: "Phone Number is required",
						pattern: {
							value: /^\d+$/,
							message: "Enter a valid phone number",
						},
					}}
				/>
			</View>
			{errors.phone && <Text style={styles.errorMessage}>{errors.phone.message}</Text>}
			<CustomButton
				title={"Verify"}
				id={"recaptcha-container"}
				onPress={handleSubmit(handlePhoneVerify)}
				color={StyleGuide.GREEN}
			/>
			{countries && (
				<CountryPickModal
					isModalVisible={isModalVisible}
					handleModalClose={handleModalClose}
					handleCountryPick={handleCountryPick}
					countries={countries}
				/>
			)}
		</SafeAreaView>
	);
};
