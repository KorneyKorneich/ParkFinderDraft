import axios from "axios";
import { Country } from "@screens/PhoneAuthScreen/types/types.ts";
import { CountryAPIType } from "../types/countyTypes.ts";

export async function getCountries(): Promise<Country[]> {
	const response =  await axios.get("https://restcountries.com/v2/all");
	return response.data.map((item: CountryAPIType) => ({
		code: item.alpha2Code,
		name: item.name,
		callingCode: `+${item.callingCodes[0]}`,
		flag: item.flags.png
	}));
}
