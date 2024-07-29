import axios from "axios";
import { Country } from "@screens/PhoneAuthScreen/types/types.ts";

export async function getCountries(): Promise<Country[]> {
	const response =  await axios.get("https://restcountries.com/v2/all");
	return response.data.map((item) => ({
		code: item.alpha2Code,
		name: item.name,
		callingCode: `+${item.callingCode[0]}`,
		flag: `https://flagsapi.com/${item.alpha2Code}/flat/64.png`
	}));
}
