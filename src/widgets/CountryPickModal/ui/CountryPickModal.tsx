import { FlatList, Modal, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import styles from "./CountryPickModal.styles.ts";
import { CloseIcon } from "@shared/ui";
import { Country, CountryItem } from "@entities/country";
import React from "react";

interface CountryPickModalProps {
	isModalVisible: boolean;
	handleModalClose: () => void;
	countries: Country[];
	handleCountryPick: (item: Country) => void;
}

export const CountryPickModal = (props: CountryPickModalProps) => {
	const { handleCountryPick, handleModalClose, countries, isModalVisible } = props;

	return (
		<Modal animationType={"slide"} transparent visible={isModalVisible}>
			<TouchableWithoutFeedback onPress={handleModalClose}>
				<View style={styles.modalContainer}>
					<View style={styles.modal}>
						<TouchableOpacity onPress={handleModalClose} style={styles.closeModalButton}>
							<CloseIcon height={30} width={30} />
						</TouchableOpacity>
						<FlatList
							data={countries}
							renderItem={({ item }) => <CountryItem handleCountryPick={handleCountryPick} item={item} />}
							keyExtractor={(item) => item.code}
						/>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
	);
};
